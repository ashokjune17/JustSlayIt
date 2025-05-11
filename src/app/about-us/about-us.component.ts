import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  doctorImages: any = [
    {
      src: '/assets/doctor1.png',
      doctorName: "Dr. Theerthana Devi",
      designation: "Founder",
      description: "Expertise: General Dentistry & Smile",
      department: "Aesthetics"
    },
    {
      src: '/assets/doctor2.png',
      doctorName: "Dr. Ramyaja Shusruth",
      designation: "Treatment Planner",
      description: "Expertise: Orthodontics & Facial",
      department: "Orthopaedics"
    },
    {
      src: '/assets/doctor3.png',
      doctorName: "Dr. Shusruth Chandrasekar",
      designation: "Clinical Advisor",
      description: "Expertise: Pediatric & Geriatric",
      department: "Orthodontics, Smile Rehabilitation"
    },

  ];
  currentDoctorStartIndex: number = 0;
  currentDoctorImageSet: any;
  images: any = [
    {
      src: '/assets/image1.png',
      title: "We are Obsessed with Innovation",
      description: "At Slay, we challenge the norms of orthodontics with cutting-edge technology and advanced treatment solutions. From state-of-the-art 3D printing to AI-driven treatment plans, we are revolutionizing smiles with innovation and expertise.",
    },
    {
      src: '/assets/image2.png',
      title: "We are Always Intentional",
      description: "Every aligner we craft is designed with precision, keeping patient comfort, aesthetics, and efficiency at the core. We don’t just create products—we create experiences that empower confidence and long-term oral health.",
    },  
    {
      src: '/assets/image3.png',
      title: "We Keep It Authentic",
      description: "We believe in transparency, honesty, and real results. No exaggerated claims, no misleading transformations—just high-quality aligners that help you achieve a naturally confident smile.",
    },
    {
      src: '/assets/image4.png',
      title: "We have High Standards",
      description: "From sourcing premium materials to ensuring a seamless treatment journey, we prioritize quality at every step. Our aligners undergo rigorous testing and expert validation to meet global standards of safety and performance.",
    },
    {
      src: '/assets/image1.png',
      title: "We are Proudly Indian",
      description: "Slay is proudly made in India, tailored to the needs of Indian patients. Our mission is to make advanced orthodontic care accessible, affordable, and culturally relevant, because every smile in India deserves the best.",
    },
    {
      src: '/assets/image1.png',
      title: "We Believe Confidence is Personal",
      description: "Your smile is unique, and so is your journey with Slay. We believe orthodontic care isn’t just about straightening teeth—it’s about feeling confident in your own skin. With Slay, you choose a smile that reflects who you truly are.",
    },
  ];
  currentStartIndex: number = 0;
  currentImageSet: any;
  isSectionOpened = false;
  constructor() { }

  ngOnInit(): void {
    this.currentDoctorImageSet = this.doctorImages.slice(this.currentDoctorStartIndex, this.currentDoctorStartIndex + 3)
    this.currentImageSet = this.images.slice(this.currentStartIndex, this.currentStartIndex + 3)
  }
  prev() {
    this.currentDoctorStartIndex -= 1;
    this.currentDoctorImageSet = this.doctorImages.slice(this.currentDoctorStartIndex, this.currentDoctorStartIndex + 3);
  }

  next() {
    this.currentDoctorStartIndex += 1;
    this.currentDoctorImageSet = this.doctorImages.slice(this.currentDoctorStartIndex, this.currentDoctorStartIndex + 3);
    setTimeout(() => {
      this.next()
    }, 5000);
  }
  previousItem() {
    this.currentStartIndex -= 1;
    this.currentImageSet = this.images.slice(this.currentStartIndex, this.currentStartIndex + 3);
  }

  nextItem() {
    this.currentStartIndex += 1;
    this.currentImageSet = this.images.slice(this.currentStartIndex, this.currentStartIndex + 3);
    setTimeout(() => {
      this.next()
    }, 5000);
  }


}
