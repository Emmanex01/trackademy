"use client"

import * as React from "react"
import { Star } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Zach",
      role: "Student",
      rating: 5,
      feedback:
        "The live discussions and instant teacher feedback completely changed how I learn.",
    },
    {
      id: 2,
      name: "Emma",
      role: "Student",
      rating: 5,
      feedback:
        "The teachers are amazing and the lessons are super interactive.",
    },
    {
      id: 3,
      name: "Liam",
      role: "Student",
      rating: 4,
      feedback: "I finally understand concepts that used to confuse me.",
    },
    {
      id: 4,
      name: "Sophia",
      role: "Student",
      rating: 5,
      feedback:
        "Learning feels fun now. The feedback system is incredibly helpful.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-primary font-medium mb-2">Testimonials</h3>
        <h2 className="text-3xl font-bold tracking-tight mb-10">
          What Our Students Say
        </h2>

        {/* 
          w-full max-w-5xl: Restricts width on large screens
          mx-auto: Centers the carousel
        */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                // Responsive sizing:
                // Full width on mobile, 1/2 on tablet, 1/3 on desktop
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-full bg-muted/50 border-none shadow-sm">
                    <CardContent className="flex flex-col justify-between p-6 h-[300px] text-left">
                      
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Feedback Text */}
                      <p className="text-muted-foreground mb-6 flex-grow">
                        "{testimonial.feedback}"
                      </p>

                      {/* User Profile */}
                      <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons (Positioned by Shadcn automatically) */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials