import { motion } from 'framer-motion';
import kiaLogo from 'figma:asset/bc478cab53c622f434d894aa94872bb3fc29a83d.png';
import hanwhaLogo from 'figma:asset/3c52344f5417b97c4f134724aba076a688ff6a5d.png';
import doosanLogo from 'figma:asset/6ae99b42b97eaa56ee044418251398b1e83193b3.png';
import lgLogo from 'figma:asset/7f9256856ac58cff55dfdc43d47d14a65ab66498.png';
import ktLogo from 'figma:asset/54257a34b6a7569b10d335b7ff242129d4da3e14.png';
import kiwoomLogo from 'figma:asset/7c9195cbaad0069b832dba96783c8afddf8fd7ba.png';

export default function TeamLogo({ team, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl',
  };

  const emojiSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  // 로고 이미지 매핑
  const logoImages = {
    'kia': kiaLogo,
    'hanwha': hanwhaLogo,
    'doosan': doosanLogo,
    'lg': lgLogo,
    'kt': ktLogo,
    'kiwoom': kiwoomLogo,
  };

  const logoImage = team?.id ? logoImages[team.id] : null;

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${team.gradient} flex items-center justify-center relative overflow-hidden shadow-lg`}>
      <div className="absolute inset-0 bg-white/10" />
      {logoImage ? (
        <img
          src={logoImage}
          alt={team.name}
          className="relative z-10 w-full h-full object-contain p-1.5"
        />
      ) : (
        <span className={`relative z-10 ${emojiSizes[size]}`}>
          {team.emoji}
        </span>
      )}
    </div>
  );
}
