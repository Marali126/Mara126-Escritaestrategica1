import React, { useState } from 'react';
import { ImageInspiration } from '../types';
import { Image as ImageIcon, Plus, Upload, Trash2, Lightbulb, Eye } from 'lucide-react';

interface VisualBrainstormCardProps {
  images: ImageInspiration[];
  onAddImage: (image: ImageInspiration) => void;
  onRemoveImage: (id: string) => void;
  onOpenStorySpark: () => void;
}

export const VisualBrainstormCard: React.FC<VisualBrainstormCardProps> = ({
  images,
  onAddImage,
  onRemoveImage,
  onOpenStorySpark
}) => {
  const [selectedPreview, setSelectedPreview] = useState<ImageInspiration | null>(null);

  const sampleVisualPrompts = [
    { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80', caption: 'Chave Dourada Misteriosa' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80', caption: 'Galáxia Bioluminescente' },
    { url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80', caption: 'Biblioteca dos Segredos' }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onAddImage({
          id: `img_${Date.now()}`,
          url: reader.result as string,
          caption: file.name.replace(/\.[^/.]+$/, ""),
          type: 'upload'
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#FFD666] rounded-3xl p-5 shadow-sm overflow-hidden relative flex flex-col justify-between h-full border border-amber-300">
      {/* Glow background decorative element */}
      <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/40 rounded-full blur-2xl pointer-events-none"></div>

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-slate-900 text-amber-300 rounded-xl">
              <ImageIcon className="w-4 h-4" />
            </span>
            <div>
              <h2 className="font-extrabold text-base text-slate-900 leading-none">
                Inspiração Visual
              </h2>
              <p className="text-[11px] font-semibold text-slate-700">Imagens para Despertar Ideias</p>
            </div>
          </div>

          <button
            onClick={onOpenStorySpark}
            className="text-[10px] bg-slate-900 text-amber-300 font-extrabold px-2.5 py-1 rounded-xl uppercase tracking-wider hover:bg-slate-800"
          >
            Faíscas ⚡
          </button>
        </div>

        {/* Gallery / Slots */}
        <div className="grid grid-cols-3 gap-2 my-2">
          {images.map((img) => (
            <div 
              key={img.id}
              className="relative group w-full h-16 rounded-2xl overflow-hidden border-2 border-white shadow-xs bg-white/50"
            >
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                <button
                  onClick={() => setSelectedPreview(img)}
                  className="p-1 bg-white/80 rounded-lg text-slate-800 hover:bg-white"
                  title="Visualizar"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onRemoveImage(img.id)}
                  className="p-1 bg-red-500 rounded-lg text-white hover:bg-red-600"
                  title="Remover"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Upload Button Tile */}
          <label className="w-full h-16 rounded-2xl bg-white/50 border-2 border-dashed border-slate-700/30 hover:border-slate-800 flex flex-col items-center justify-center cursor-pointer transition-colors text-slate-800">
            <Plus className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-bold">Enviar Foto</span>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload} 
              className="hidden" 
            />
          </label>
        </div>
      </div>

      {/* Preset Inspirations Quick Add */}
      <div className="pt-2 border-t border-slate-900/10">
        <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider block mb-1">
          Prompts Visuais Rápidos:
        </span>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {sampleVisualPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => onAddImage({ id: `preset_${idx}_${Date.now()}`, url: p.url, caption: p.caption, type: 'preset' })}
              className="text-[10px] font-bold bg-white/70 hover:bg-white text-slate-900 px-2 py-1 rounded-xl whitespace-nowrap shadow-2xs border border-white/80"
            >
              + {p.caption}
            </button>
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center p-4" onClick={() => setSelectedPreview(null)}>
          <div className="bg-white p-4 rounded-3xl max-w-lg w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <img src={selectedPreview.url} alt={selectedPreview.caption} className="w-full max-h-80 object-cover rounded-2xl mb-2" />
            <p className="text-center font-bold text-slate-800 text-sm">{selectedPreview.caption}</p>
            <button
              onClick={() => setSelectedPreview(null)}
              className="mt-3 w-full py-2 bg-slate-900 text-white font-bold rounded-xl text-xs"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
