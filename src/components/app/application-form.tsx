'use client';

import { useState, useMemo, useCallback } from 'react';
import type { Service } from '@/lib/services';
import { serviceSchemaMap } from '@/lib/schemas';
import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

import { formAssistance } from '@/ai/flows/form-assistance';
import { useToast } from "@/hooks/use-toast";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

type ApplicationFormProps = {
  service: Service;
};

type AIHelpState = {
  [key: string]: {
    text: string;
    loading: boolean;
  };
};

// A simple debounce hook
const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
    setTimeoutId(newTimeoutId);
  };
};

export function ApplicationForm({ service }: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [aiHelp, setAiHelp] = useState<AIHelpState>({});
  const { toast } = useToast();
  const router = useRouter();

  const CurrentSchema = useMemo(() => {
    return serviceSchemaMap[service.id as keyof typeof serviceSchemaMap] || z.object({});
  }, [service.id]);

  type SchemaType = z.infer<typeof CurrentSchema>;

  const form = useForm<SchemaType>({
    resolver: zodResolver(CurrentSchema),
    mode: 'onChange',
  });

  const formFields = useMemo(() => Object.keys(CurrentSchema.shape), [CurrentSchema]);
  
  const steps = useMemo(() => {
    const fieldGroups = [['fullName', 'dateOfBirth', 'placeOfBirth'], ['address', 'phoneNumber'], ['documentUpload']];
    return fieldGroups.filter(group => group.some(field => formFields.includes(field)));
  }, [formFields]);


  const getAIHelp = useDebounce(async (fieldName: string, value: string) => {
    if (!value) {
        setAiHelp(prev => ({ ...prev, [fieldName]: { text: '', loading: false } }));
        return;
    }
    
    setAiHelp(prev => ({ ...prev, [fieldName]: { text: prev[fieldName]?.text || '', loading: true } }));
    
    try {
        const result = await formAssistance({
            formField: fieldName,
            fieldValue: value,
            context: `User is applying for ${service.title}.`,
        });
        setAiHelp(prev => ({ ...prev, [fieldName]: { text: result.helpText, loading: false } }));
    } catch (error) {
        console.error('AI assistance error:', error);
        setAiHelp(prev => ({ ...prev, [fieldName]: { text: 'Could not load help.', loading: false } }));
    }
  }, 500);

  const processForm = (data: FieldValues) => {
    console.log('Form data:', data);
    toast({
      title: "Application Submitted!",
      description: "Your application has been successfully submitted.",
    });
    router.push('/my-applications');
  };

  const nextStep = async () => {
    const fieldsToValidate = steps[currentStep];
    const isValid = await form.trigger(fieldsToValidate as any);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <Card>
      <CardHeader>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processForm)}>
          <CardContent className="space-y-6">
            {steps.map((fieldGroup, stepIndex) => (
              <div key={stepIndex} className={cn("space-y-4", currentStep !== stepIndex && 'hidden')}>
                {fieldGroup.map(fieldName => (
                    <FormField
                        key={fieldName}
                        control={form.control}
                        name={fieldName as any}
                        render={({ field }) => {
                          const label = fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                          
                          if (fieldName === 'documentUpload') {
                            return (
                                <FormItem>
                                    <FormLabel>{label}</FormLabel>
                                    <FormControl>
                                        <Input type="file" onChange={e => field.onChange(e.target.files ? e.target.files[0] : null)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                          }
                          
                          if (fieldName === 'dateOfBirth') {
                             return (
                               <FormItem className="flex flex-col">
                                 <FormLabel>{label}</FormLabel>
                                 <Popover>
                                   <PopoverTrigger asChild>
                                     <FormControl>
                                       <Button
                                         variant={"outline"}
                                         className={cn(
                                           "w-[240px] pl-3 text-left font-normal",
                                           !field.value && "text-muted-foreground"
                                         )}
                                       >
                                         {field.value ? (
                                           format(new Date(field.value), "PPP")
                                         ) : (
                                           <span>Pick a date</span>
                                         )}
                                         <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                       </Button>
                                     </FormControl>
                                   </PopoverTrigger>
                                   <PopoverContent className="w-auto p-0" align="start">
                                     <Calendar
                                       mode="single"
                                       selected={field.value ? new Date(field.value) : undefined}
                                       onSelect={(date) => field.onChange(date?.toISOString())}
                                       disabled={(date) =>
                                         date > new Date() || date < new Date("1900-01-01")
                                       }
                                       initialFocus
                                     />
                                   </PopoverContent>
                                 </Popover>
                                 <FormMessage />
                               </FormItem>
                             );
                          }

                          return (
                            <FormItem>
                                <FormLabel>{label}</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Input 
                                      {...field}
                                      onChange={(e) => {
                                        field.onChange(e);
                                        getAIHelp(fieldName, e.target.value);
                                      }}
                                    />
                                    {(aiHelp[fieldName]?.loading || aiHelp[fieldName]?.text) && (
                                       <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        {aiHelp[fieldName].loading ? (
                                            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                                        ) : (
                                          <Sparkles className="h-4 w-4 text-accent" />
                                        )}
                                       </div>
                                    )}
                                  </div>
                                </FormControl>
                                {aiHelp[fieldName]?.text && !aiHelp[fieldName]?.loading && (
                                    <p className="text-sm text-muted-foreground flex items-center gap-2 pt-1">
                                      <Sparkles className="h-3 w-3 text-accent" />
                                      {aiHelp[fieldName].text}
                                    </p>
                                )}
                                <FormMessage />
                            </FormItem>
                          )
                        }}
                    />
                ))}
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0}>
              Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit">
                Submit Application
              </Button>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
