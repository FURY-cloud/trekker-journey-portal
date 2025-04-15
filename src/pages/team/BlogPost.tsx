
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const BlogPost = () => {
  const { memberId, postId } = useParams<{ memberId: string; postId: string }>();
  const [post, setPost] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);
  
  // Simulated data fetching - in a real app, this would come from an API
  useEffect(() => {
    // Simulated blog posts data with full content
    const blogPostsData = {
      "high-altitude-safety": {
        id: "high-altitude-safety",
        title: "Safety Tips for High Altitude Trekking",
        date: "March 15, 2025",
        author: "rahul-sharma",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500",
        excerpt: "Essential guidelines to help you prepare for and safely navigate high altitude environments.",
        content: `
          <p>Trekking at high altitudes offers breathtaking views and unforgettable experiences, but it also presents unique challenges and risks. As someone who has led treks in the Himalayas for over 15 years, I've learned that proper preparation and knowledge are key to a safe and enjoyable high-altitude adventure.</p>
          
          <h3>Understanding Altitude Sickness</h3>
          
          <p>Altitude sickness, or Acute Mountain Sickness (AMS), can affect anyone regardless of age, fitness level, or previous trekking experience. The primary cause is ascending too quickly, not giving your body enough time to acclimatize to decreased oxygen levels.</p>
          
          <p>Common symptoms include:</p>
          <ul>
            <li>Headache</li>
            <li>Nausea and loss of appetite</li>
            <li>Dizziness and fatigue</li>
            <li>Difficulty sleeping</li>
            <li>Shortness of breath with exertion</li>
          </ul>
          
          <p>If symptoms are severe or worsen, it can progress to High Altitude Pulmonary Edema (HAPE) or High Altitude Cerebral Edema (HACE), both of which are medical emergencies requiring immediate descent.</p>
          
          <h3>Pre-Trek Preparation</h3>
          
          <p>Before embarking on a high-altitude trek:</p>
          <ul>
            <li><strong>Get a medical check-up:</strong> Consult with a healthcare provider about your planned trek, especially if you have pre-existing conditions like heart or lung problems.</li>
            <li><strong>Build your fitness:</strong> Improve your cardiovascular fitness through regular exercise in the months leading up to your trek.</li>
            <li><strong>Research your destination:</strong> Understand the altitude profile of your trek, acclimatization days built into the itinerary, and emergency descent routes.</li>
            <li><strong>Pack appropriately:</strong> Bring layered clothing, proper boots, sun protection, a first aid kit, and any prescribed medications.</li>
          </ul>
          
          <h3>During Your Trek</h3>
          
          <p>Follow these guidelines while trekking at high altitudes:</p>
          
          <h4>1. Ascend Gradually</h4>
          <p>The golden rule for high altitude trekking is "climb high, sleep low" and limit your daily ascent to 300-500 meters once above 3,000 meters. Include rest days for acclimatization, especially after significant gains in elevation.</p>
          
          <h4>2. Stay Hydrated</h4>
          <p>Drink 4-5 liters of water daily. Dehydration exacerbates altitude sickness symptoms and is common at high altitudes due to increased respiratory water loss.</p>
          
          <h4>3. Maintain Proper Nutrition</h4>
          <p>Eat regular meals high in carbohydrates, even if you don't feel hungry. Your body needs extra calories at altitude.</p>
          
          <h4>4. Monitor for Symptoms</h4>
          <p>Check in with yourself and your trekking companions regularly. Be honest about how you're feeling, and don't push through worsening symptoms.</p>
          
          <h4>5. Descend If Necessary</h4>
          <p>The most effective treatment for altitude sickness is descent. Never hesitate to go down if symptoms are persistent or severe.</p>
          
          <h3>Medications and Supplements</h3>
          
          <p>Some medications can help prevent or treat altitude sickness:</p>
          <ul>
            <li><strong>Acetazolamide (Diamox):</strong> Can help with acclimatization when taken prophylactically. Consult your doctor about dosage.</li>
            <li><strong>Ibuprofen:</strong> Can help with altitude-related headaches.</li>
            <li><strong>Dexamethasone:</strong> Used for severe symptoms, but only under medical supervision.</li>
          </ul>
          
          <p>Remember that medications are not substitutes for proper acclimatization.</p>
          
          <h3>Emergency Response</h3>
          
          <p>Know the signs of severe altitude sickness that require immediate action:</p>
          <ul>
            <li>Persistent, severe headache unrelieved by medication</li>
            <li>Vomiting that prevents eating or drinking</li>
            <li>Increasing shortness of breath at rest</li>
            <li>Ataxia (loss of coordination)</li>
            <li>Confusion or altered mental status</li>
            <li>Cough producing frothy or bloody sputum</li>
          </ul>
          
          <p>If these symptoms occur, immediate descent is necessary, along with oxygen if available and medical attention as soon as possible.</p>
          
          <h3>Final Thoughts</h3>
          
          <p>High altitude trekking is one of the most rewarding outdoor experiences available, offering unparalleled views and a profound sense of accomplishment. With proper preparation, gradual ascent, and attentiveness to your body's signals, you can significantly reduce the risks associated with high altitudes.</p>
          
          <p>Remember, there's no shame in turning back if needed—the mountains will always be there for another attempt. Your safety should always be the priority.</p>
          
          <p>Happy trekking!</p>
        `,
        tags: ["High Altitude", "Trekking Safety", "Mountaineering", "Himalayas", "Travel Tips"]
      },
      "tiger-conservation": {
        id: "tiger-conservation",
        title: "Tiger Conservation: Challenges and Successes",
        date: "March 10, 2025",
        author: "priya-patel",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500",
        excerpt: "An in-depth look at tiger conservation efforts in India and how responsible tourism can contribute.",
        content: `
          <p>India is home to approximately 70% of the world's wild tigers, making it the epicenter of global tiger conservation efforts. As a wildlife biologist who has spent years studying these magnificent creatures, I've witnessed firsthand both the challenges facing tiger populations and the remarkable conservation successes achieved through dedicated efforts.</p>
          
          <h3>The Current State of Tigers in India</h3>
          
          <p>The most recent tiger census conducted in 2022 estimated India's tiger population at around 3,000 individuals, a significant increase from the alarming low of 1,411 in 2006. This recovery represents one of conservation's greatest success stories, but the battle is far from won.</p>
          
          <p>Tigers currently occupy only about 7% of their historical range in India, confined to protected reserves and increasingly isolated forest patches. While some tiger reserves like Ranthambore, Bandhavgarh, and Kaziranga have healthy breeding populations, many others struggle with small, vulnerable tiger numbers.</p>
          
          <h3>Key Challenges in Tiger Conservation</h3>
          
          <h4>1. Habitat Loss and Fragmentation</h4>
          <p>The single greatest threat to tigers is the loss and fragmentation of their habitat. Expanding agriculture, infrastructure development, mining, and urbanization continue to encroach on forest areas. Tigers need large territories—a male may require 75-100 square kilometers in some habitats. When forests become fragmented, tiger populations become isolated, leading to genetic bottlenecks and increased vulnerability.</p>
          
          <h4>2. Human-Wildlife Conflict</h4>
          <p>As tiger habitats shrink, encounters between tigers and humans increase. Livestock predation by tigers creates significant economic hardship for communities living near tiger reserves, sometimes leading to retaliatory killings. Additionally, while rare, tiger attacks on humans create fear and antipathy toward conservation efforts.</p>
          
          <h4>3. Poaching and Illegal Wildlife Trade</h4>
          <p>Despite strict protection laws, poaching remains a serious threat. Tiger parts command high prices in illegal wildlife markets, particularly for use in traditional medicines and luxury decorative items. A single tiger can be worth tens of thousands of dollars in these black markets, creating a powerful incentive for poaching.</p>
          
          <h4>4. Prey Depletion</h4>
          <p>Tigers depend on abundant prey, primarily deer and wild boar. When prey animals are hunted by local communities for food or commercial purposes, tiger populations suffer. A healthy tiger needs to make a kill roughly once a week, consuming about 50 large prey animals annually.</p>
          
          <h3>Conservation Success Stories</h3>
          
          <p>Despite these challenges, there have been remarkable conservation achievements:</p>
          
          <h4>Project Tiger</h4>
          <p>Launched in 1973, Project Tiger established a network of tiger reserves across India with strict protection measures. From nine original reserves, the network has grown to 53 reserves covering approximately 75,000 square kilometers. This flagship conservation program has been crucial in preventing tiger extinction in India.</p>
          
          <h4>Advanced Monitoring Systems</h4>
          <p>India has pioneered sophisticated tiger monitoring techniques, including camera trapping, DNA analysis from scat samples, and electronic surveillance systems. The comprehensive tiger census conducted every four years provides vital data for conservation planning.</p>
          
          <h4>Community Involvement</h4>
          <p>Some of the most successful conservation initiatives have focused on engaging local communities as stakeholders. Programs that provide alternative livelihoods, compensate for livestock losses, and share tourism benefits have transformed former poachers into protectors in several regions.</p>
          
          <h4>Wildlife Corridors</h4>
          <p>Recognizing the importance of genetic connectivity between tiger populations, conservation efforts now emphasize the establishment and protection of wildlife corridors connecting isolated reserves. The Terai Arc Landscape initiative, for example, aims to connect 12 protected areas across India and Nepal.</p>
          
          <h3>The Role of Tourism in Conservation</h3>
          
          <p>Responsible wildlife tourism has emerged as a powerful conservation tool. When properly managed, tourism:</p>
          
          <ul>
            <li>Provides economic incentives for conservation by making live tigers more valuable than dead ones</li>
            <li>Creates employment alternatives for communities near tiger habitats</li>
            <li>Increases surveillance in tourist zones, deterring poachers</li>
            <li>Raises awareness and builds public support for conservation</li>
          </ul>
          
          <p>However, tourism must be carefully regulated to prevent negative impacts. Overcrowding, habitat disturbance, and inappropriate visitor behavior can stress tigers and degrade their habitat.</p>
          
          <h3>Guidelines for Responsible Tiger Tourism</h3>
          
          <p>If you're planning to participate in a tiger safari, follow these guidelines to ensure your visit supports conservation:</p>
          
          <ul>
            <li>Choose operators with demonstrated conservation commitments</li>
            <li>Respect all park rules and maintain proper distances from wildlife</li>
            <li>Keep noise to a minimum and never attempt to attract animals' attention</li>
            <li>Support lodges that employ local staff and invest in community development</li>
            <li>Be patient and understand that wildlife viewing is unpredictable</li>
            <li>Learn about conservation issues affecting the area you're visiting</li>
          </ul>
          
          <h3>The Future of Tiger Conservation</h3>
          
          <p>The recovery of India's tigers demonstrates that with political will, scientific management, and community involvement, conservation can succeed even for species requiring large territories. However, new challenges are emerging, including climate change impacts on tiger habitats and increasing development pressures.</p>
          
          <p>The future of tiger conservation will depend on:</p>
          
          <ul>
            <li>Strengthening protection in existing reserves</li>
            <li>Securing and restoring wildlife corridors</li>
            <li>Developing more effective conflict mitigation strategies</li>
            <li>Integrating tiger conservation into broader land-use planning</li>
            <li>Building sustainable financing mechanisms, including responsible tourism</li>
            <li>Continuing international cooperation to combat wildlife trafficking</li>
          </ul>
          
          <p>By addressing these priorities, we can ensure that India's national animal continues to thrive in the wild, benefiting ecosystems and communities alike. The tiger's recovery reminds us that conservation challenges, while daunting, are not insurmountable when approached with commitment, science, and collaboration.</p>
        `,
        tags: ["Wildlife Conservation", "Tigers", "Responsible Tourism", "Biodiversity", "National Parks"]
      }
    };

    // Simulated team members data
    const teamMembersData = {
      "rahul-sharma": {
        name: "Rahul Sharma",
        role: "Founder & Lead Trekker",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      },
      "priya-patel": {
        name: "Priya Patel",
        role: "Wildlife Expert & Guide",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      }
    };
    
    if (postId && blogPostsData[postId as keyof typeof blogPostsData]) {
      const blogPost = blogPostsData[postId as keyof typeof blogPostsData];
      setPost(blogPost);
      
      if (blogPost.author && teamMembersData[blogPost.author as keyof typeof teamMembersData]) {
        setAuthor(teamMembersData[blogPost.author as keyof typeof teamMembersData]);
      }
    }
  }, [postId, memberId]);

  if (!post || !author) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Link to={`/team/${memberId}`} className="text-adventure-600 hover:text-adventure-800 flex items-center justify-center">
            <ArrowLeft className="mr-2" size={16} /> Back to Team Member
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <Link to={`/team/${memberId}`} className="text-adventure-600 hover:text-adventure-800 flex items-center mb-8">
          <ArrowLeft className="mr-2" size={16} /> Back to {author.name}'s Profile
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-96">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
                
                <div className="flex items-center text-white">
                  <div className="flex items-center mr-6">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{author.name}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap items-center mb-8">
                <Tag size={16} className="text-gray-500 mr-2" />
                {post.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div 
                className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={author.image} 
                      alt={author.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold">{author.name}</h3>
                    <p className="text-gray-600">{author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
