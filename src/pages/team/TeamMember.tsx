
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';

const TeamMember = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<any>(null);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  
  // Simulated data fetching - in a real app, this would come from an API
  useEffect(() => {
    // Simulated team member data
    const teamMembersData = {
      "rahul-sharma": {
        name: "Rahul Sharma",
        role: "Founder & Lead Trekker",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
        fullBio: "Rahul Sharma is the heart and soul of Alpine Trekkers. With over 15 years of experience trekking across the Himalayas, Western Ghats, and international destinations, Rahul founded the company to share his passion for adventure and sustainable travel with others. A certified mountaineer from the Himalayan Mountaineering Institute, he has summited multiple peaks above 6,000 meters and led over 200 successful expeditions. Rahul's philosophy is that the journey is as important as the destination, and he designs each trek to create meaningful connections with nature, local cultures, and fellow travelers. When not on the trail, Rahul advocates for sustainable tourism practices and works with local communities to develop eco-friendly trekking routes.",
        expertise: ["High Altitude Trekking", "Wilderness Survival", "Sustainable Tourism", "Route Planning", "Team Leadership"],
        achievements: ["Summited Stok Kangri (6,153m)", "Completed the entire Great Himalaya Trail", "Certified Wilderness First Responder", "Published author on trekking safety"],
        email: "rahul@alpinetrekkers.com",
        socialMedia: {
          instagram: "rahul_alpine",
          linkedin: "rahul-sharma-trekker"
        }
      },
      "priya-patel": {
        name: "Priya Patel",
        role: "Wildlife Expert & Guide",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
        fullBio: "Priya Patel brings her extensive knowledge of Indian wildlife and ecosystems to Alpine Trekkers. With a Master's degree in Wildlife Biology and five years of field research experience, Priya designs and leads our wildlife tours with a deep respect for nature and conservation principles. Her research on tiger populations in central India has been published in leading conservation journals, and she regularly conducts workshops on responsible wildlife tourism. Priya's tours are known for their educational value, focusing not just on spotting animals but understanding their behavior, habitat needs, and conservation challenges. Her patient approach and keen eye for detail ensure that guests have meaningful wildlife encounters while maintaining appropriate distances and minimizing environmental impact.",
        expertise: ["Wildlife Photography", "Animal Tracking", "Bird Identification", "Conservation Education", "Habitat Assessment"],
        achievements: ["Published researcher in conservation biology", "Former consultant for Wildlife Trust of India", "Certified Nature Guide from Wildlife Institute of India", "Developed wildlife monitoring protocols for eco-tourism"],
        email: "priya@alpinetrekkers.com",
        socialMedia: {
          instagram: "priya_wildlifephotographer",
          linkedin: "priya-patel-wildlife"
        }
      },
      "amit-desai": {
        name: "Amit Desai",
        role: "Photography Instructor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
        fullBio: "Amit Desai is an award-winning photographer whose work has been featured in National Geographic, Lonely Planet, and various travel publications. After a successful career in commercial photography, Amit found his true calling in adventure and landscape photography, capturing the raw beauty of natural environments. He joined Alpine Trekkers to share his expertise with photography enthusiasts of all levels. Amit's photography tours blend technical instruction with artistic inspiration, teaching participants how to work with natural light, composition, and storytelling through images. His philosophy emphasizes responsible photography practices that respect wildlife, local communities, and fragile ecosystems. Amit's patient teaching style and ability to spot unique photo opportunities make his tours favorites among both beginners and experienced photographers.",
        expertise: ["Landscape Photography", "Night Sky Photography", "Post-Processing Techniques", "Gear Selection", "Environmental Portraiture"],
        achievements: ["National Geographic published photographer", "Winner, India Nature Photography Awards 2023", "Solo exhibition: 'Himalayan Light'", "Author of 'Capturing the Wild: Ethical Wildlife Photography'"],
        email: "amit@alpinetrekkers.com",
        socialMedia: {
          instagram: "amit_captures",
          linkedin: "amit-desai-photography"
        }
      },
      "meera-singh": {
        name: "Meera Singh",
        role: "Cultural Expert",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
        fullBio: "Meera Singh brings anthropological expertise and a deep appreciation for India's diverse cultural heritage to Alpine Trekkers. With a Ph.D. in Cultural Anthropology and extensive fieldwork across rural India, Meera designs immersive experiences that connect travelers with authentic local traditions while ensuring these interactions remain respectful and mutually beneficial. Her approach to cultural tourism emphasizes genuine exchange, challenging stereotypes, and supporting local artisans and knowledge keepers. Meera has developed strong relationships with communities throughout India, allowing our travelers access to traditional rituals, craft demonstrations, and culinary experiences rarely available to typical tourists. She also consults on our community development initiatives, ensuring that tourism benefits reach local communities in meaningful ways.",
        expertise: ["Cultural Preservation", "Traditional Crafts", "Indigenous Knowledge", "Community-Based Tourism", "Festival Traditions"],
        achievements: ["Published author on cultural tourism", "Designed award-winning community tourism program", "Guest lecturer at tourism institutes", "Documentary consultant for cultural heritage series"],
        email: "meera@alpinetrekkers.com",
        socialMedia: {
          instagram: "meera_culture_explorer",
          linkedin: "meera-singh-anthropology"
        }
      },
      "vikram-roy": {
        name: "Vikram Roy",
        role: "Safety Officer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
        fullBio: "Vikram Roy ensures that all Alpine Trekkers adventures maintain the highest safety standards. A former Indian Army officer with specialized training in mountain warfare, Vikram brings discipline, preparedness, and crisis management expertise to our team. He holds advanced certifications in wilderness first aid, search and rescue operations, and avalanche safety. Vikram personally trains all our guides in safety protocols and emergency procedures, and he conducts regular equipment checks and safety drills. His meticulous approach to risk assessment has been instrumental in our perfect safety record. Beyond technical skills, Vikram understands the psychological aspects of adventure safety, helping guests manage challenges while still enjoying their experience. His calm demeanor and clear communication during difficult situations have earned him the nickname 'The Rock' among our team members.",
        expertise: ["Risk Assessment", "Emergency Response", "Equipment Safety", "Weather Prediction", "Group Management"],
        achievements: ["Former Indian Army officer", "Wilderness First Responder certification", "Avalanche Safety Instructor", "Developed comprehensive safety manual for trekking operators"],
        email: "vikram@alpinetrekkers.com",
        socialMedia: {
          instagram: "vikram_safety_first",
          linkedin: "vikram-roy-safety"
        }
      },
      "anjali-kumar": {
        name: "Anjali Kumar",
        role: "Sustainability Director",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
        fullBio: "Anjali Kumar oversees Alpine Trekkers' environmental and social responsibility initiatives. With a background in environmental science and sustainable development, she ensures that our operations minimize ecological impact while maximizing benefits to local communities. Anjali has developed our comprehensive sustainability framework, which includes waste reduction protocols, carbon offset programs, and ethical purchasing guidelines. She works closely with local partners to create employment opportunities, support traditional livelihoods, and preserve cultural heritage. Under her leadership, Alpine Trekkers has eliminated single-use plastics from all tours, established a scholarship program for youth from mountain communities, and initiated several conservation projects in trekking destinations. Anjali regularly conducts sustainability workshops for both staff and clients, helping everyone understand how their choices affect the places we visit.",
        expertise: ["Sustainable Tourism", "Carbon Footprint Reduction", "Community Development", "Waste Management", "Environmental Education"],
        achievements: ["Master's in Sustainable Development", "Led certification process for eco-tourism standards", "Speaker at International Sustainable Tourism Conference", "Developed zero-waste trekking protocols"],
        email: "anjali@alpinetrekkers.com",
        socialMedia: {
          instagram: "anjali_sustainability",
          linkedin: "anjali-kumar-sustainable-tourism"
        }
      }
    };

    // Simulated blog posts data
    const blogPostsData = {
      "rahul-sharma": [
        {
          id: "high-altitude-safety",
          title: "Safety Tips for High Altitude Trekking",
          date: "March 15, 2025",
          excerpt: "Essential guidelines to help you prepare for and safely navigate high altitude environments.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        },
        {
          id: "monsoon-trekking",
          title: "The Magic of Monsoon Trekking in the Western Ghats",
          date: "February 28, 2025",
          excerpt: "Discover why the rainy season offers a unique and rewarding trekking experience in the Sahyadri range.",
          image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        }
      ],
      "priya-patel": [
        {
          id: "tiger-conservation",
          title: "Tiger Conservation: Challenges and Successes",
          date: "March 10, 2025",
          excerpt: "An in-depth look at tiger conservation efforts in India and how responsible tourism can contribute.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        },
        {
          id: "birdwatching-tips",
          title: "Beginner's Guide to Birdwatching in Indian Forests",
          date: "January 20, 2025",
          excerpt: "Essential tips, equipment recommendations, and etiquette for novice birdwatchers.",
          image: "https://images.unsplash.com/photo-1452378169684-61a0b5f3d0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        }
      ],
      "amit-desai": [
        {
          id: "landscape-photography",
          title: "Mastering Landscape Photography in Challenging Light",
          date: "March 5, 2025",
          excerpt: "Techniques for capturing stunning landscapes during golden hour, blue hour, and harsh midday sun.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        },
        {
          id: "photography-gear",
          title: "Essential Photography Gear for Adventure Travel",
          date: "February 12, 2025",
          excerpt: "My recommendations for cameras, lenses, and accessories that balance quality with portability.",
          image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        }
      ],
      "meera-singh": [
        {
          id: "himalayan-cultures",
          title: "Hidden Traditions: Cultural Diversity in the Himalayas",
          date: "March 8, 2025",
          excerpt: "Exploring the rich tapestry of cultures, traditions, and beliefs across the Himalayan region.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        },
        {
          id: "responsible-cultural-tourism",
          title: "Ethical Guidelines for Cultural Tourism",
          date: "January 30, 2025",
          excerpt: "How travelers can engage with local cultures in ways that are respectful, meaningful, and beneficial.",
          image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        }
      ],
      "vikram-roy": [
        {
          id: "emergency-preparedness",
          title: "Emergency Preparedness for Adventure Travel",
          date: "February 25, 2025",
          excerpt: "Essential skills, knowledge, and equipment to handle unexpected situations in remote environments.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        },
        {
          id: "weather-reading",
          title: "How to Read Weather Patterns in the Mountains",
          date: "January 15, 2025",
          excerpt: "Understanding cloud formations, wind patterns, and other natural indicators to predict weather changes.",
          image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        }
      ],
      "anjali-kumar": [
        {
          id: "zero-waste-trekking",
          title: "Zero-Waste Trekking: A Practical Guide",
          date: "March 1, 2025",
          excerpt: "Tips and strategies for minimizing your environmental impact while enjoying the outdoors.",
          image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        },
        {
          id: "community-tourism",
          title: "The Power of Community-Based Tourism",
          date: "February 8, 2025",
          excerpt: "How tourism can empower local communities when done with the right approach and values.",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
        }
      ]
    };
    
    if (id && teamMembersData[id as keyof typeof teamMembersData]) {
      setMember(teamMembersData[id as keyof typeof teamMembersData]);
      setBlogPosts(blogPostsData[id as keyof typeof blogPostsData] || []);
    }
  }, [id]);

  if (!member) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Team member not found</h2>
          <Link to="/team" className="text-adventure-600 hover:text-adventure-800 flex items-center justify-center">
            <ArrowLeft className="mr-2" size={16} /> Back to Team
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <Link to="/team" className="text-adventure-600 hover:text-adventure-800 flex items-center mb-8">
          <ArrowLeft className="mr-2" size={16} /> Back to Team
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="h-96 md:h-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
              <p className="text-adventure-600 text-lg mb-6">{member.role}</p>
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700">{member.fullBio}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill: string) => (
                    <span 
                      key={skill} 
                      className="bg-adventure-50 text-adventure-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Achievements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {member.achievements.map((achievement: string) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Contact</h3>
                  <p className="text-gray-700">{member.email}</p>
                </div>
                
                <div className="flex space-x-4 mt-4 md:mt-0">
                  {member.socialMedia.instagram && (
                    <a href={`https://instagram.com/${member.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-adventure-600">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  
                  {member.socialMedia.linkedin && (
                    <a href={`https://linkedin.com/in/${member.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-adventure-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {blogPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Latest from {member.name}'s Blog</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/team/${id}/blog/${post.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User size={14} className="mr-1" />
                      <span>{member.name}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center text-adventure-600 hover:text-adventure-800 transition-colors">
                      <span>Read Article</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TeamMember;
