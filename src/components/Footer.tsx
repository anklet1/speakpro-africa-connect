
import { BookOpen } from 'lucide-react';

export function Footer() {
  const socialLinks = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];
  const footerLinks = [
    { title: 'Platform', links: ['Courses', 'Live', 'Pricing', 'Challenges'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Help Center', 'Terms', 'Privacy'] },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 text-primary">
              <BookOpen className="h-7 w-7" />
              <span className="text-xl font-bold text-foreground">SpeakPro Africa</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">Unlocking Africa's voice, one speaker at a time.</p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-muted-foreground hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} SpeakPro Africa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((name) => (
              <a key={name} href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">{name}</span>
                {/* Placeholder for social icons */}
                <div className="h-6 w-6 bg-muted rounded-full"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
