import React, { useState } from 'react';
import { Instagram, Linkedin, Youtube, BookOpen, Sprout, Leaf, Globe } from 'lucide-react';
//import InstagramEmbed from './InstagramEmbed';
// import i1 from "../assets/images/insta1.jpg";
// import i2 from "../assets/images/insta2.jpg";
// import i3 from "../assets/images/insta3.jpg";
// import i4 from "../assets/images/insta4.jpg";
const MediaCard = ({ icon: Icon, title, description, cta, link, gradient, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <div
      className={`relative group transition-all duration-700 ease-out ${delay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      <div className={`relative h-80 rounded-2xl overflow-hidden transition-all duration-500 ${
        isHovered ? 'scale-105 shadow-2xl shadow-green-300' : 'shadow-lg shadow-green-200'
      }`}>
        <div className={`absolute inset-0 ${gradient} transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-90'
        }`}>
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
       
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
       
        <div className="relative h-full flex flex-col justify-between p-8">
          <div className={`transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
          }`}>
            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-green-200">
              <Icon className="w-8 h-8 text-green-600" strokeWidth={2} />
            </div>
          </div>
         
          <div className={`transition-all duration-500 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-6">{description}</p>
           
            <button
              onClick={() => window.open(link, '_blank')}
              className={`group/btn relative px-6 py-3 bg-white text-green-700 rounded-full font-semibold overflow-hidden transition-all duration-300 ${
                isHovered ? 'scale-105 shadow-xl shadow-green-400' : 'scale-100'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {cta}
                <span className={`transition-
transform duration-300 ${

                  isHovered ? 'translate-x-1' : 'translate-x-0'
                }`}>→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
       
        {isHovered && (
          <>
            <div className="absolute top-10 left-10 w-2 h-2 bg-white/80 rounded-full animate-float"></div>
            <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-white/60 rounded-full animate-float-delay"></div>
            <div className="absolute bottom-24 left-20 w-2 h-2 bg-white/70 rounded-full animate-float-slow"></div>
          </>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-200">
    <Icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
    <div className="text-4xl font-bold text-green-800 mb-2">{number}</div>
    <div className="text-green-600 text-sm">{label}</div>
  </div>
);

const InstagramPost = ({ imageUrl, likes, caption }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative">
        <img
          src={imageUrl}
          alt="Instagram post"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-green-800/80 to-green-900/80 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center text-white">
            <Instagram className="w-12 h-12 mx-auto mb-3" />
            <p className="font-semibold text-lg text-white">{likes} likes</p>
            <p className="text-sm mt-2 px-4 text-white/90">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const YouTubeVideo = ({ videoId, title, views }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(`https://youtube.com/watch?v=${videoId}`, '_blank')}
    >
      <div className="aspect-video bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative">
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-green-800/40 to-green-900/40 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'bg-green-800/60' : ''
        }`}>
          <div className={`w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg shadow-green-900/50 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}>
            <Youtube className="w-10 h-10 text-green-600 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-4 border-t border-green-200">
        <h4 className="text-green-800 font-semibold line-clamp-2 mb-1">{title}</h4>
        <p className="text-green-600 text-sm">{views} views</p>
      </div>
    </div>
  );
};

const SocialLink = ({ icon: Icon, platform, handle, link, gradient }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-5 bg-green-50 rounded-xl border border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-200 group"
  >
    <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <div className="flex-1">
      <h4 className="text-green-800 font-semibold text-lg">{platform}</h4>
      <p className="text-green-600 text-sm">{handle}</p>
    </div>
    <svg className="w-5 h-5 text-green-600 group-hover:text-green-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

export default function ClimetoMedia() {
  const cards = [
    {
      icon: Instagram,
      title: 'Laugh',
      description: 'Watch our sustainability memes & creative videos',
      cta: 'Visit Instagram',
      link: 'https://www.instagram.com/climeto_global/',
      gradient: 'bg-gradient-to-br from-green-500 via-green-600 to-green-700',
      delay: 'animation-delay-0'
    },
    {
      icon: Linkedin,
      title: 'Update',
      description: 'Stay informed with Climeto\'s LinkedIn updates',
      cta: 'Go to LinkedIn',
      link: 'https://in.linkedin.com/company/climeto',
      gradient: 'bg-gradient-to-br from-green-600 via-green-700 to-green-800',
      delay: 'animation-delay-100'
    },
    {
      icon: Youtube,
      title: 'Education',
      description: 'Learn through "The Climeto TV" on YouTube',
      cta: 'Watch Now',
      link: 'https://www.youtube.com/channel/UCfDCy2RHjWjb1HPW9yIJ11g',
      gradient: 'bg-gradient-to-br from-green-500 via-green-600 to-green-700',
      delay: 'animation-delay-200'
    },
    {
      icon: BookOpen,
      title: 'Awareness',
      description: 'Explore our in-depth environmental blogs',
      cta: 'Read Blogs',
      link: '/climeto-blog',
      gradient: 'bg-gradient-to-br from-green-600 via-green-700 to-green-800',
      delay: 'animation-delay-300'
    }
  ];


const instagramPosts = [
  { imageUrl: "/insta1.jpg", postUrl: "https://www.instagram.com/p/DPx5lVOiqAH/" },
  { imageUrl: "/insta2.jpg", postUrl: "https://www.instagram.com/reel/DQ8j9I_CkMX/" },
  { imageUrl: "/instanew1.jpg", postUrl: "https://www.instagram.com/p/DPBlCDGiqpH/" },
  { imageUrl: "/instanew2.jpg", postUrl: "https://www.instagram.com/p/DMZjDKHhJgJ/" }
];


 const youtubeVideos = [
  {  
    videoId: 'EnH9fyI827A',
    title: 'Climate Change & Carbon Market Explained | Climeto TV Podcast Part -1',
    views: '5K'
  },
  {
    videoId: 'GWx77FAa0E4',
    title: 'Producers & EPR: The Real Side of Compliance | The Climeto TV Podcast',
    views: '7K'
  },
  {
    videoId: '1b-0Kqi1Eog',
    title: '💰 What if Carbon Could Earn You Money? | Carbon Market Explained |  The Climeto TV Podcast',
    views: '8K'
  }
];


  return (
    <div className="min-h-screen bg-white py-20 px-4 relative overflow-hidden">
      {/* Background Nature Elements */}
      <div className="absolute inset-0 opacity-5">
<div className="absolute top-20 left-10 w-64 h-64 ... max-w-full"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
       
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
       
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-8px); }
        }
       
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
       
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
       
        .animate-float-delay {
          animation: float-delay 3.5s ease-in-out infinite;
        }
       
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
       
        .animation-delay-0 {
          animation-delay: 0ms;
        }
       
        .animation-delay-100 {
          animation-delay: 100ms;
        }
       
        .animation-delay-200 {
          animation-delay: 200ms;
        }
       
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
     
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto relative z-10">

        {/* Hero Header */}
        <div className="text-center mb-20 opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold border border-green-300">
              🌿 Connect With Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Climeto <span className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent">Media</span>
          </h2>
          <p className="text-green-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Join our growing community across multiple platforms. From entertaining memes to in-depths educational content, we're spreading climate awareness in every format imaginable.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
          <StatCard number="50K+" label="Community Members" icon={Sprout} />
          <StatCard number="500+" label="Content Pieces" icon={Leaf} />
          <StatCard number="2M+" label="Total Reach" icon={Globe} />
        </div> */}
       
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cards.map((card, index) => (
            <MediaCard key={index} {...card} />
          ))}
        </div>

        {/* Instagram Section */}
        <div className="mb-20 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}>
          <div className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-200 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-green-800 mb-2">Latest from Instagram</h3>
                  <p className="text-green-600 text-sm">@climeto.official</p>
                </div>
              </div>
              <button
                onClick={() => window.open('https://www.instagram.com/climeto_global/', '_blank')}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-300 hidden md:block"
              >
                Follow Us
              </button>
            </div>
           
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {instagramPosts.map((post, index) => (
                <InstagramPost key={index} {...post} />
              ))}
            </div>
           
            <p className="text-green-700 leading-relaxed">
              Climate change doesn't have to be boring! Our Instagram is where sustainability meets creativity. We share hilarious memes that make environmental issues relatable, short-form videos that break down complex topics, and behind-the-scenes glimpses of our initiatives.
            </p>
          </div>
        </div>

        {/* YouTube Section */}
        <div className="mb-20 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards' }}>
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-green-800 mb-2">The Climeto TV</h3>
                  <p className="text-green-600 text-sm">Educational content that inspires</p>
                </div>
              </div>
              <button
                onClick={() => window.open('https://www.youtube.com/channel/UCfDCy2RHjWjb1HPW9yIJ11g', '_blank')}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-300 hidden md:block"
              >
                Subscribe
              </button>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {youtubeVideos.map((video, index) => (
                <YouTubeVideo key={index} {...video} />
              ))}
            </div>
           
            <p className="text-green-700 leading-relaxed">
              Welcome to The Climeto TV, your destination for comprehensive environmental education. Our YouTube channel features documentary-style videos, expert interviews, DIY sustainability tutorials, and detailed explanations of climate science.
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mb-20 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 1s forwards' }}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Connect With Us Everywhere</h3>
            <p className="text-green-600 text-lg">Follow, engage, and be part of the climate action movement</p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SocialLink
              icon={Instagram}
              platform="Instagram"
              handle="@theclimetotv"
              link="https://www.instagram.com/theclimetotv/"
              gradient="from-green-500 to-green-600"
            />
            <SocialLink
              icon={Linkedin}
              platform="LinkedIn"
              handle="Climeto Network"
              link="https://in.linkedin.com/company/climeto"
              gradient="from-green-600 to-green-700"
            />
            <SocialLink
              icon={Youtube}
              platform="YouTube"
              handle="The Climeto TV"
              link="https://www.youtube.com/channel/UCfDCy2RHjWjb1HPW9yIJ11g"
              gradient="from-green-600 to-green-700"
            />
            <SocialLink
              icon={BookOpen}
              platform="Blog"
              handle="climeto.com/blog"
              link="/climeto-blog"
              gradient="from-green-600 to-green-700"
            />
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 1.2s forwards' }}>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-12 border-2 border-green-400 shadow-2xl shadow-green-300">
            <Leaf className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Movement
            </h3>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
              Every like, share, and comment helps spread climate awareness. Follow us on all platforms and be part of a global community working towards a sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.open('/climeto-blog', '_blank')}
                className="px-8 py-3 bg-white text-green-700 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-700/40"
              >
              Read Our Blogs 
              </button>
              {/* <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Join Climeto',
                      text: 'Check out Climeto - Making climate action accessible and engaging!',
                      url: window.location.href
                    }).catch(() => {});
                  }
                }}
                className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition-all duration-300 border-2 border-white/30"
              >
                Share with Friends
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}