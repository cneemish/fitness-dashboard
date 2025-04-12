
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { User, Phone, Mail, Droplets, Calendar, Heart, Target } from 'lucide-react';

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  emergencyContact: z.string().min(10, { message: "Emergency contact must be at least 10 digits." }),
  bloodGroup: z.string(),
  age: z.string(),
  ageGroup: z.enum(["18-24", "25-34", "35-44", "45-54", "55+"]),
  bodyType: z.enum(["ectomorph", "mesomorph", "endomorph"]),
  exerciseTarget: z.string(),
  medicalConditions: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const Profile = () => {
  // Default form values
  const defaultValues: Partial<ProfileFormValues> = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    emergencyContact: "0987654321",
    bloodGroup: "O+",
    age: "28",
    ageGroup: "25-34",
    bodyType: "mesomorph",
    exerciseTarget: "Build muscle and improve cardio",
    medicalConditions: "None",
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    // In a real app, this would save to a backend
  }

  return (
    <MainLayout>
      <div className="py-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-white">
              <User className="h-5 w-5 text-fitness-green" /> Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <User className="h-4 w-4 text-fitness-green" /> Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Mail className="h-4 w-4 text-fitness-green" /> Email
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Phone className="h-4 w-4 text-fitness-green" /> Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="emergencyContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Phone className="h-4 w-4 text-red-500" /> Emergency Contact
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Emergency contact number" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator className="bg-zinc-800" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="bloodGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Droplets className="h-4 w-4 text-red-500" /> Blood Group
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Blood Group" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Calendar className="h-4 w-4 text-fitness-green" /> Age
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your age" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ageGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Calendar className="h-4 w-4 text-fitness-green" /> Age Group
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1 mt-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="18-24" id="r1" className="border-fitness-green" />
                              <Label htmlFor="r1" className="text-gray-300">18-24</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="25-34" id="r2" className="border-fitness-green" />
                              <Label htmlFor="r2" className="text-gray-300">25-34</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="35-44" id="r3" className="border-fitness-green" />
                              <Label htmlFor="r3" className="text-gray-300">35-44</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="45-54" id="r4" className="border-fitness-green" />
                              <Label htmlFor="r4" className="text-gray-300">45-54</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="55+" id="r5" className="border-fitness-green" />
                              <Label htmlFor="r5" className="text-gray-300">55+</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Separator className="bg-zinc-800" />

                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="bodyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Heart className="h-4 w-4 text-fitness-green" /> Body Type
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3 mt-2"
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="ectomorph" id="bt1" className="border-fitness-green" />
                              <div>
                                <Label htmlFor="bt1" className="font-medium text-gray-300">Ectomorph</Label>
                                <p className="text-sm text-gray-400">Naturally lean and thin, struggle to gain weight/muscle</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="mesomorph" id="bt2" className="border-fitness-green" />
                              <div>
                                <Label htmlFor="bt2" className="font-medium text-gray-300">Mesomorph</Label>
                                <p className="text-sm text-gray-400">Athletic build, gain/lose weight relatively easily</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="endomorph" id="bt3" className="border-fitness-green" />
                              <div>
                                <Label htmlFor="bt3" className="font-medium text-gray-300">Endomorph</Label>
                                <p className="text-sm text-gray-400">Naturally higher body fat, gains muscle easily but struggles to lose fat</p>
                              </div>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator className="bg-zinc-800" />

                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="exerciseTarget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Target className="h-4 w-4 text-fitness-green" /> Exercise Target
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your exercise goals" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="medicalConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-300">
                          <Heart className="h-4 w-4 text-red-500" /> Medical Conditions
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List any medical conditions that might affect your exercise routine" 
                            {...field} 
                            className="bg-zinc-800 border-zinc-700 min-h-[100px] text-white" 
                          />
                        </FormControl>
                        <FormMessage className="text-fitness-pink" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-fitness-green hover:bg-fitness-green/90 text-white">Save Changes</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Profile;
