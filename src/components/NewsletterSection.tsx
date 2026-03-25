import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Mock API call - Replace with actual newsletter service
      // Example: Brevo, SendGrid, Mailchimp API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus('success');
      setStatusMessage('Successfully subscribed! Check your email for confirmation.');
      setEmail('');
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to subscribe. Please try again.');
      console.error('Newsletter error:', error);
      
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card
            className="p-8 md:p-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5"
            style={{ borderColor: "hsla(293, 100%, 51%, 1.00)" }}
            data-aos="zoom-in"
          >
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p className="text-muted-foreground">
                  Subscribe to my newsletter to get the latest updates on robotics, IoT, and AI projects
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl flex-1"
                    disabled={loading}
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-xl whitespace-nowrap disabled:opacity-50"
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </div>

                {status !== 'idle' && (
                  <div className={`flex items-center justify-center gap-2 p-3 rounded-lg ${
                    status === 'success'
                      ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                      : 'bg-red-500/20 text-red-700 dark:text-red-400'
                  }`}>
                    {status === 'success' ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm">{statusMessage}</span>
                  </div>
                )}

                <p className="text-xs text-muted-foreground">
                  No spam, unsubscribe anytime. I respect your privacy.
                </p>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
