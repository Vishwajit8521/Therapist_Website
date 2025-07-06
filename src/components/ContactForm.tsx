import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    preferredMethod: '',
    recaptcha: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const areFieldsFilled = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.phone.trim() !== '' &&
      formData.message.trim() !== '' &&
      formData.preferredTime.trim() !== '' &&
      formData.preferredMethod !== ''
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Please tell us how I can help you';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred contact time is required';
    if (!formData.preferredMethod) newErrors.preferredMethod = 'Please select a contact method';
    if (!formData.recaptcha) newErrors.recaptcha = 'Please complete the reCAPTCHA';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Thank you for reaching out!",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });
      setFormData({
        name: '', email: '', phone: '', message: '', preferredTime: '',
        preferredMethod: '', recaptcha: '',
      });
      recaptchaRef.current?.reset();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setFormData(prev => ({ ...prev, recaptcha: token || '' }));
    if (errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: '' }));
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            This form is private and safe. Dr. Blake will usually respond within one business day.
          </p>
        </div>
        <Card className="card-gentle">
          <CardContent className="p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Your full name" className={`h-12 text-base ${errors.name ? 'border-destructive' : ''}`} />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="you@example.com" className={`h-12 text-base ${errors.email ? 'border-destructive' : ''}`} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="(555) 234-5678" className={`h-12 text-base ${errors.phone ? 'border-destructive' : ''}`} />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can I help you?</Label>
                <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Please share what you'd like to work on..." className={`min-h-32 text-base resize-none ${errors.message ? 'border-destructive' : ''}`} />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred contact time</Label>
                  <Input id="preferredTime" value={formData.preferredTime} onChange={(e) => handleInputChange('preferredTime', e.target.value)} placeholder="e.g., Weekday mornings" className={`h-12 text-base ${errors.preferredTime ? 'border-destructive' : ''}`} />
                  {errors.preferredTime && <p className="text-sm text-destructive">{errors.preferredTime}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredMethod">Preferred contact method</Label>
                  <Select onValueChange={(value) => handleInputChange('preferredMethod', value)} value={formData.preferredMethod}>
                    <SelectTrigger className={`h-12 text-base ${errors.preferredMethod ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder="Select a method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.preferredMethod && <p className="text-sm text-destructive">{errors.preferredMethod}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  {areFieldsFilled() ? (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your site key
                      onChange={handleRecaptchaChange}
                    />
                  ) : (
                    <div className="text-center p-4 border rounded-md bg-muted/50 w-full">
                      <p className="text-sm text-muted-foreground">Please fill in all fields above to activate the reCAPTCHA.</p>
                    </div>
                  )}
                </div>
                {errors.recaptcha && <p className="text-sm text-destructive mt-2 text-center">{errors.recaptcha}</p>}
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full btn-primary text-lg"
                disabled={!areFieldsFilled() || !formData.recaptcha}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
