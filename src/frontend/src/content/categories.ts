export interface Category {
  id: string;
  name: string;
  description: string;
  content: Array<{
    title: string;
    text: string;
  }>;
}

export const categories: Category[] = [
  {
    id: 'photography',
    name: 'Photography',
    description: 'Capturing moments through the lens',
    content: [
      {
        title: 'Visual Storytelling',
        text: 'Photography is more than just capturing images—it\'s about telling stories through light, composition, and emotion. Each frame represents a unique perspective on the world around us.',
      },
      {
        title: 'Technical Excellence',
        text: 'From portrait photography to landscape work, mastering the technical aspects of exposure, focus, and color grading allows for the creation of compelling visual narratives.',
      },
      {
        title: 'Creative Vision',
        text: 'Every photograph is an opportunity to share a vision, evoke emotion, and connect with viewers on a deeper level. The camera becomes an extension of creative expression.',
      },
    ],
  },
  {
    id: 'blender',
    name: 'Blender & Animations',
    description: 'Creating immersive 3D worlds and motion',
    content: [
      {
        title: '3D Modeling',
        text: 'Blender provides powerful tools for creating detailed 3D models, from character design to architectural visualization. The possibilities are limitless in the digital realm.',
      },
      {
        title: 'Animation & Motion',
        text: 'Bringing static models to life through animation requires understanding timing, weight, and movement. Each frame is carefully crafted to create fluid, believable motion.',
      },
      {
        title: 'Rendering & Lighting',
        text: 'The final render is where all elements come together—materials, lighting, and composition combine to create stunning visual results that captivate audiences.',
      },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Crafting beautiful and functional experiences',
    content: [
      {
        title: 'User-Centered Design',
        text: 'Great design starts with understanding user needs and behaviors. Creating intuitive interfaces that delight users while solving real problems is at the heart of design thinking.',
      },
      {
        title: 'Visual Communication',
        text: 'Typography, color theory, and layout principles work together to create clear visual hierarchies that guide users through experiences seamlessly.',
      },
      {
        title: 'Iterative Process',
        text: 'Design is an iterative journey of exploration, testing, and refinement. Each iteration brings us closer to solutions that are both beautiful and functional.',
      },
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Building the future with circuits and code',
    content: [
      {
        title: 'Hardware Innovation',
        text: 'Electronics projects combine creativity with technical knowledge, from simple circuits to complex embedded systems. Each component plays a crucial role in bringing ideas to life.',
      },
      {
        title: 'IoT & Connectivity',
        text: 'The Internet of Things opens new possibilities for connected devices that interact with the physical world, creating smart solutions for everyday challenges.',
      },
      {
        title: 'Prototyping & Making',
        text: 'From breadboard to PCB, the journey of creating electronic devices involves experimentation, problem-solving, and the satisfaction of seeing ideas become tangible reality.',
      },
    ],
  },
];
