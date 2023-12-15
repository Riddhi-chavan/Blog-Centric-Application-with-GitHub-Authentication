import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
const posts = [  
    {
      title: 'GrooveMasters Unleashed',
      slug: 'groovemasters-unleashed',
      content:
        ' Dive into the world of dance as we explore the latest dance trends, break down iconic dance routines, and share tips to help you become the master of the dance floor. From salsa to hip-hop, we have got your moves covered.',
    },
    {
      title: 'Beyond the Field',
      slug: 'beyond-the-field',
      content:
        'Get ready for a rollercoaster ride through the thrilling world of sports! Whether youre a fan of soccer, basketball, or extreme sports, our blog covers the latest news, in-depth analyses, and inspiring stories of athletes who go beyond the limits to achieve greatness.',
    },
    {
      title: 'Harmony Haven',
      slug: 'harmony-haven',
      content:
        'Join us on a melodic journey as we explore the art and science of singing. From vocal warm-ups to stage presence, our blog provides valuable insights for aspiring singers. Discover hidden gems in the music industry, learn about vocal techniques, and find your unique voice.',
    },
    {
      title: 'DesignSculpt: Crafting Aesthetics with Purpose',
      slug: 'designsculpt-aesthetics-purpose',
      content:
        'Enter the realm of design excellence with DesignSculpt, where we explore the intersection of form and function. Uncover the latest trends in graphic design, web design, and product design. From minimalist masterpieces to bold innovations, learn how design shapes the world around us.',
    },
    {
      title: 'DramaFlare: Exploring the K-Drama Universe',
      slug: 'dramaflare-kdrama-universe',
      content:
        'Immerse yourself in the captivating world of Korean dramas with DramaFlare. From heart-wrenching romances to mind-bending thrillers, we dissect the latest K-Dramas, share recommendations, and delve into the cultural nuances that make each series a unique viewing experience.',
    },
  ];

  export async function GET() {
    const session = await getServerSession();
    return NextResponse.json(posts);
  }

  