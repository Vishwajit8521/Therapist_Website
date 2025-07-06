import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Faq } from '@/components/Faq';
import { ContactForm } from '@/components/ContactForm';

// Import all images
import heroBackground from '@/assets/hero-background.jpg';
import drSerenaBlake from '@/assets/dr-serena-blake.jpg';
import anxietyService from '@/assets/anxiety-service.jpg';
import relationshipService from '@/assets/relationship-service.jpg';
import traumaService from '@/assets/trauma-service.jpg';

const Index = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 hero-text">
            Psychological Care for
          </h1>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 hero-text">
            Change, Insight, and Well-Being
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-light hero-text max-w-3xl mx-auto">
            Offering individual and couples psychotherapy for adults in Los Angeles, CA
          </p>
          <Button 
            size="lg" 
            className="btn-primary text-lg px-12 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-warm-beige">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
                About Dr. Serena Blake
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                  with eight years of experience and over 500 client sessions. She blends evidence-based 
                  approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                  personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p>
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive. 
                  Her approach combines clinical expertise with genuine empathy, ensuring each client 
                  receives care tailored to their unique needs and goals.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary h-5 w-5" />
                      <span className="font-medium">1287 Maplewood Drive</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary h-5 w-5" />
                      <span>(323) 555-0192</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary h-5 w-5" />
                      <span>serena@blakepsychology.com</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="text-primary h-5 w-5" />
                      <div>
                        <div className="font-medium">In-person: Tue & Thu</div>
                        <div className="text-sm text-muted-foreground">10 AM–6 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-primary h-5 w-5" />
                      <div>
                        <div className="font-medium">Virtual: Mon, Wed & Fri</div>
                        <div className="text-sm text-muted-foreground">1 PM–5 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src={drSerenaBlake} 
                alt="Dr. Serena Blake" 
                className="w-full max-w-md rounded-3xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Services & Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compassionate, evidence-based therapy tailored to your unique needs and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gentle group hover:scale-105 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6">
                <img 
                  src={anxietyService} 
                  alt="Anxiety & Stress Management" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl mb-4">Anxiety & Stress Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Learn effective coping strategies and mindfulness techniques to manage anxiety, 
                  reduce stress, and regain control over your daily life. Together, we'll develop 
                  personalized tools to help you find peace and clarity.
                </CardDescription>
                <div className="mt-6 text-lg font-semibold text-primary">
                  $200 / individual session
                </div>
              </CardContent>
            </Card>

            <Card className="card-gentle group hover:scale-105 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6">
                <img 
                  src={relationshipService} 
                  alt="Relationship Counseling" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl mb-4">Relationship Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Strengthen communication, rebuild trust, and deepen intimacy in your relationships. 
                  Whether you're facing challenges or seeking to enhance connection, we'll work together 
                  to create healthier, more fulfilling relationships.
                </CardDescription>
                <div className="mt-6 text-lg font-semibold text-primary">
                  $240 / couples session
                </div>
              </CardContent>
            </Card>

            <Card className="card-gentle group hover:scale-105 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6">
                <img 
                  src={traumaService} 
                  alt="Trauma Recovery" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl mb-4">Trauma Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Heal from past experiences with compassionate, trauma-informed care. Using proven 
                  therapeutic approaches, we'll work at your pace to process difficult experiences 
                  and reclaim your sense of safety and empowerment.
                </CardDescription>
                <div className="mt-6 text-lg font-semibold text-primary">
                  $200 / individual session
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Faq />

      <ContactForm />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container-custom text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Dr. Serena Blake, PsyD</h3>
          <p className="text-background/80 mb-6">Clinical Psychologist • Los Angeles, CA</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <span>(323) 555-0192</span>
            <span>serena@blakepsychology.com</span>
            <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;