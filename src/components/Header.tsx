
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const courseCategories: { title: string; href: string; description: string }[] = [
  {
    title: "For Students",
    href: "#",
    description: "Master public speaking, debates, and interviews.",
  },
  {
    title: "For Teachers",
    href: "#",
    description: "Enhance classroom control and persuasive communication.",
  },
  {
    title: "For Creators",
    href: "#",
    description: "Perfect your video content delivery and on-screen presence.",
  },
];

const navLinks = [
  { name: 'Live', href: '#' },
  { name: 'Practice', href: '#' },
  { name: 'Pricing', href: '#' },
];

const allNavLinks = [{ name: 'Courses', href: '#' }, ...navLinks];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 text-primary">
              <BookOpen className="h-7 w-7" />
              <span className="text-xl font-bold text-foreground">SpeakPro Africa</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <BookOpen className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                              SpeakPro Africa
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Unlock your voice. Inspire Africa. Courses for all levels.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {courseCategories.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {allNavLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="px-5 flex items-center gap-4">
              <Button variant="ghost" className="w-full">Log In</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
