import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = [
    '/assets/frt-img-teeth.png',
    '/assets/sec-img-teeth.png',
    '/assets/three-img-teeth.png',
    '/assets/fourth-img-teeth.png',
    '/assets/fifth-img-teeth.png'
  ];
  currentStartIndex: number = 0;
  currentImageSet = ['/assets/frt-img-teeth.png',
    '/assets/sec-img-teeth.png',
    '/assets/three-img-teeth.png',];
  medicalTeamAccordion = [
    {
      accordionHeader: "Experience",
      accordionIcon: "/assets/experience.png",
      accordionContent: "We bring together top orthodontists and tech-driven smile designers to ensure flawless, expert-led transformations"
    },
    {
      accordionHeader: "Safety",
      accordionIcon: "/assets/safety.png",
      accordionContent: " Crafted with globally certified materials, our aligners prioritize your health and comfort at every step."
    },
    {
      accordionHeader: "Monitoring",
      accordionIcon: "/assets/monitoring.png",
      accordionContent: "With real-time tracking and expert supervision, your progress is closely guided from start to finish."
    },
    {
      accordionHeader: "Excellence",
      accordionIcon: "/assets/excellence.png",
      accordionContent: "Powered by innovation and precision, Slay delivers results that redefine aligner standards."
    },
  ]
  faqSet = [
    {
      question: " What are Slay aligners made of?",
      answer: "Slay aligners are made from high-quality, BPA-free, biocompatible materials that are safe, flexible, and virtually invisible."
    },
    {
      question: "How long does the treatment take?",
      answer: "Treatment duration varies per case, but most smile transformations with Slay take between 4 to 12 months."
    },
    {
      question: "Are Slay aligners painful to wear?",
      answer: "You may feel mild pressure for the first few days, but it’s a sign they’re working. Our aligners are designed for maximum comfort."
    },
    {
      question: "How often should I wear my aligners?",
      answer: "For best results, wear them 20–22 hours a day — only remove them while eating, drinking anything other than water, or brushing."
    },
    {
      question: "Can I eat or drink with Slay aligners on?",
      answer: "We recommend removing them before eating or drinking anything other than water to avoid staining or damaging the aligners."
    },
    {
      question: "How do I get started with Slay?",
      answer: "It’s easy! Visit our certified clinics near you or book your scan appointment in the given number to begin your smile journey."
    },
    {
      question: "Is there a doctor monitoring my case?",
      answer: "Absolutely. Every treatment is supervised by certified orthodontists who ensure your progress stays on track."
    },
    {
      question: "What if I lose an aligner?",
      answer: "No worries —contact us immediately. We’ll guide you on the next steps or arrange for a replacement if needed."
    },
    {
      question: "Can Slay fix complex dental issues?",
      answer: "Slay is ideal for mild to moderate corrections. For complex cases, our orthodontists will guide you to the best treatment path."
    },
    {
      question: "How much do Slay aligners cost?",
      answer: "Slay offers flexible, transparent pricing. Book a consultation to get your personalized plan and pricing."
    }
  ];

  activeAccordionIndex = 0;
  activeFaqIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }


  prev() {
    this.currentStartIndex -= 1;
    this.currentImageSet = this.images.slice(this.currentStartIndex, this.currentStartIndex + 2);
  }

  next() {
    this.currentStartIndex += 1;
    this.currentImageSet = this.images.slice(this.currentStartIndex, this.currentStartIndex + 3);
    setTimeout(() => {
      this.next()
    }, 5000);
  }
  
  openAccordion(index: any) {
    this.activeAccordionIndex = index;
  }
  openFaq(index: any) {
    this.activeFaqIndex = index;
  }
}
