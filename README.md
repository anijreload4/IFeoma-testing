# Ifeoma's Garden of Memories - Birthday Celebration Website

A beautiful, interactive birthday celebration website created for Ifeoma Funmilayo Umeanor's birthday (November 25th, 2024). The website serves as a digital memory garden combining elegant floral designs with modern web functionality.

## 🌸 Project Overview

### Theme & Design
- **Primary Colors**: Royal blue, coral, and gold
- **Design Elements**: Oval photo frames, floral patterns, love-shaped containers
- **Typography**: Elegant fonts with cursive accents for headers
- **Aesthetic**: Garden-inspired with floating butterflies and gentle animations

### Technical Stack
- **Framework**: Astro with React components
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Media Handling**: Swiper for carousels
- **Icons**: Phosphor Icons
- **Authentication**: Cookie-based PIN protection

## 🌺 Features

### 1. Homepage (The Celebrant's Garden)
- Auto-rotating photo carousel with 10 celebrant photos
- Featured birthday video integration
- Celebrant's introduction in a love-shaped container
- Bible verses display
- Children's section with oval frames for Chigoziem and Chimezie
- Background music player (CeCe Winans - "Goodness of God")

### 2. Family Messages (Family Garden)
- Family photo carousel with scripture
- Individual message sections for:
  - Mrs. T.T Umeanor (Mom) - Photo and text
  - Uchenna and family - Dual video display
  - OBD dynasty - Triple photo carousel with voice note
  - Anwulika - Photo and extended message
  - Nathan - Photo, text, and voice note
  - Victory and Deborah - Photo, text, and voice note

### 3. Friends' Messages (Friendship Pavilion)
- Introductory section with Bible verse
- Video Messages Section:
  - Pastor Adeyemi
  - Ada (dual video display)
  - Bro Moses
  - Chizara Stephen
  - Eke Adaeze
  - Tijesunimi Adeyemi
- Written Messages Section:
  - Scrollable messages from Chuks, Osita, Mrs. Good Head, Raphael Dayo, and Global SF Logistics CEO
  - Each message includes photo and formatted text

### 4. Media Sanctuary
- YouTube video playlist (5 videos)
- MP3 music playlist (5 songs)
- Interactive wish/prayer submission form with:
  - Name field
  - Relationship field
  - Message/prayer field
  - Optional photo upload
- Inspiration Gallery:
  - 10 Bible verses about friendship and love
  - 10 friendship quotes

## 🌷 Technical Features

### Authentication
- PIN protection (4025)
- 24-hour session persistence
- Secure cookie implementation

### Responsive Design
- Mobile-first approach
- Fluid layouts for all screen sizes
- Touch-friendly interactions
- Consistent design across devices

### Media Features
- Lazy loading for images
- Automatic video playback management
- Background music with pause/play controls
- Volume control functionality

### Performance Optimizations
- Image optimization
- Component-based architecture
- Efficient state management
- Smooth animations and transitions

## 📁 Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── celebrant/    # Celebrant photos
│   │   ├── family/       # Family member photos
│   │   ├── friends/      # Friends' photos
│   │   └── media/        # Music and video files
├── src/
│   ├── components/       # React components
│   ├── layouts/          # Page layouts
│   └── pages/           # Astro pages
```

## 🚀 Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📸 Media Requirements

### Required Folders Structure in public/assets:
- celebrant/ (10 photos)
- family/ (family member photos)
- friends/ (friends' photos)
- media/
  - music/ (background music and voice notes)
  - thumbnails/ (video thumbnails)

### Video Integration
- Replace placeholder video IDs in components with actual Google Drive video IDs
- Update YouTube playlist with actual video IDs

## 🎵 Audio Integration
- Add background music file to public/assets/media/
- Add voice messages for family members
- Configure MP3 playlist with actual audio files

## 🔒 Security Considerations
- PIN-based access control
- Secure cookie implementation
- Form submission validation
- Media upload restrictions

## 💐 Customization
- Update color scheme in tailwind.config.mjs
- Modify animations in component files
- Adjust layout and spacing in individual components
- Update content in respective component files

## 📱 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Touch-enabled interactions

## 🌹 Contributors
- Initial development and design team
- Content provided by family and friends
- Technical implementation by StackBlitz team