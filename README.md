# Placely - Creative Space Booking Platform

**Placely** is a modern web application that connects creators with unique spaces for various creative activities. Whether you're looking for a heritage haveli for a photoshoot, a minimalist studio for a video production, or a vibrant venue for an event, Placely helps you discover and book the perfect space.

## Features

###  **Multiple Activity Categories**
- **Photoshoot** - Fashion, product, brand campaigns, portrait sessions
- **Video Shoot** - Brand videos, Instagram reels, music videos, YouTube content
- **Film Shoot** - Short films, documentaries, web series, indie projects
- **Workshops** - Creative workshops, yoga sessions, team brainstorming
- **Podcast** - Interview series, talk shows, storytelling sessions
- **Dance Shoot** - Choreography videos, dance tutorials, performance captures
- **Events** - Brand launches, networking events, celebrations
- **Exhibitions** - Art exhibitions, product displays, creative showcases

### **Interactive User Experience**
- **Advanced Filtering** - Filter by price range, location, and activities
- **Beautiful Animations** - Smooth transitions powered by Framer Motion
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Dark/Light Mode** - Theme switching with next-themes
- **Real-time Search** - Instant filtering and search results

### **Diverse Space Collection**
- Heritage properties (Havelis, Colonial buildings)
- Modern studios and creative spaces
- Unique outdoor locations
- Artistic and bohemian interiors
- Professional event venues

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DEVESH1709/Placely.git
   cd Placely
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Linting**: ESLint with Next.js config

## Key Components

### `SpaceCard`
Displays individual spaces with:
- High-quality images with hover effects
- Pricing information
- Star ratings
- Activity tags and location
- Smooth animations on interaction

### `FilterPanel`
Provides filtering options:
- Price range slider
- Location search
- Activity checkboxes
- Category selection

### `HomePage`
Main application logic:
- Space fetching and state management
- Real-time filtering
- Category-based navigation
- Responsive grid layout

##  Space Categories

Each space can be booked for multiple activities:

1. **Photoshoot**  - Professional photography sessions
2. **Video Shoot**  - Content creation and filming
3. **Film Shoot**  - Cinematic productions
4. **Workshops**  - Learning and skill-building
5. **Podcast**  - Audio content recording
6. **Dance Shoot**  - Movement and choreography
7. **Events**  - Celebrations and gatherings
8. **Exhibitions**  - Art and product displays

## Data Structure

Spaces are defined with the following structure:
```typescript
interface Space {
  id: number;
  title: string;
  description: string;
  location: string;
  activities: string[];
  price: number;
  rating: number;
  image: string;
  tags: string[];
}
```

## Design Features

- **Modern UI/UX** with hover effects and animations
- **Gradient backgrounds** and smooth transitions
- **Card-based layout** for optimal space presentation
- **Mobile-first** responsive design
- **Accessibility** considerations with proper contrast and focus states

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

##  Responsive Design

Placely is fully responsive and optimized for:
-  Mobile devices (320px+)
-  Tablets (768px+)
-  Desktops (1024px+)
-  Large screens (1440px+)

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License.

##  Author

**Devesh Kesharwani**
- GitHub: [@DEVESH1709](https://github.com/DEVESH1709)

##  Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**Discover. Book. Create.** 

**Discover. Book. Create.** ✨
