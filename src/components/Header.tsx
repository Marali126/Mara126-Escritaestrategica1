import React, { useState } from 'react';
import { MARA_DAHER_LOGO_SVG, BRAND_COLORS } from '../data/defaultLogo';
import { SRSDStage, StudentProfile } from '../types';
import { Upload, Sparkles, BookOpen, Award, FileText, Settings, RefreshCw, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  customLogoUrl: string | null;
  onLogoUpload: (url: string | null) => void;
  student: StudentProfile;
  onUpdateStage: (stage: SRSDStage) => void;
  onOpenMediatorGuide: () => void;
  onOpenExport: () => void;
  onOpenStorySpark: () => void;
  onUpdateStudentProfile?: (profile: Partial<StudentProfile>) => void;
}

export const Header: React.FC<HeaderProps> = ({
  customLogoUrl,
  onLogoUpload,
  student,
  onUpdateStage,
  onOpenMediatorGuide,
  onOpenExport,
  onOpenStorySpark,
  onUpdateStudentProfile
}) => {
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [tempStudentName, setTempStudentName] = useState(student.name);
  const [tempStudentAge, setTempStudentAge] = useState(student.age);
  const [tempAvatarEmoji, setTempAvatarEmoji] = useState(student.avatarEmoji);
  const [tempLogoInput, setTempLogoInput] = useState('');

  const stageLabels: Record<SRSDStage, { name: string; step: number; color: string }> = {
    stage1_background: { name: '1. Conhecimento Prévio', step: 1, color: 'bg-amber-100 text-amber-800 border-amber-300' },
    stage2_discuss: { name: '2. Discutir Estratégia', step: 2, color: 'bg-blue-100 text-blue-800 border-blue-300' },
    stage3_model: { name: '3. Modelagem do Mediador', step: 3, color: 'bg-purple-100 text-purple-800 border-purple-300' },
    stage4_memorize: { name: '4. Memorizar Mnemônico', step: 4, color: 'bg-pink-100 text-pink-800 border-pink-300' },
    stage5_support: { name: '5. Prática Guiada', step: 5, color: 'bg-teal-100 text-teal-800 border-teal-300' },
    stage6_independent: { name: '6. Escrita Independente', step: 6, color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onLogoUpload(reader.result as string);
        setShowLogoModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="bg-white rounded-3xl p-4 md:p-5 shadow-sm border border-slate-200 mb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
      {/* Brand & Logo Area */}
      <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
        <div 
          onClick={() => setShowLogoModal(true)}
          className="relative group cursor-pointer h-20 md:h-24 w-56 sm:w-72 md:w-80 bg-slate-50 hover:bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-2 md:p-3 flex items-center justify-center transition-all overflow-hidden shadow-xs"
          title="Clique para alterar ou inserir seu logotipo"
        >
          {customLogoUrl ? (
            <img src={customLogoUrl} alt="Logo Personalizada" className="h-full w-full object-contain" />
          ) : (
            <div className="h-full w-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: MARA_DAHER_LOGO_SVG }} />
          )}

          {/* Hover Overlay hint */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold gap-1 rounded-2xl transition-opacity">
            <Upload className="w-4 h-4" />
            <span>Inserir Logo</span>
          </div>
        </div>

        <div className="hidden sm:block h-10 w-[2px] bg-slate-200"></div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
              Escrita Estratégica <span className="text-[#0F85A5]">SRSD</span>
            </h1>
            <span className="text-[10px] font-bold bg-[#E86F37] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
              9-14 anos
            </span>
          </div>
          <p className="text-xs font-semibold text-slate-500">
            Método Graham & Karen Harris | Fonoaudiologia & Aprendizagem
          </p>
        </div>
      </div>

      {/* Stage & SRSD Controls */}
      <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 w-full lg:w-auto">
        {/* Stage Selector */}
        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold text-slate-600 pl-2 hidden sm:inline">Etapa SRSD:</span>
          <select 
            value={student.currentStage}
            onChange={(e) => onUpdateStage(e.target.value as SRSDStage)}
            className={`text-xs font-bold px-3 py-1.5 rounded-xl border text-slate-800 cursor-pointer focus:outline-none ${stageLabels[student.currentStage].color}`}
          >
            {Object.entries(stageLabels).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
        </div>

        {/* Story Spark Quick Action */}
        <button
          onClick={onOpenStorySpark}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
          style={{ backgroundColor: BRAND_COLORS.orange }}
        >
          <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
          <span>Faísca de História</span>
        </button>

        {/* Mediator Guide Button */}
        <button
          onClick={onOpenMediatorGuide}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
          title="Guia clínico para fonoaudiólogos e educadores"
        >
          <BookOpen className="w-4 h-4 text-[#0F85A5]" />
          <span className="hidden sm:inline">Guia do Mediador</span>
        </button>

        {/* Export / Print Button */}
        <button
          onClick={onOpenExport}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
          title="Exportar ou Imprimir Produção"
        >
          <FileText className="w-4 h-4 text-[#932966]" />
          <span className="hidden sm:inline">Exportar</span>
        </button>

        {/* Student Avatar & Profile (Clickable to Edit) */}
        <div 
          onClick={() => {
            setTempStudentName(student.name);
            setTempStudentAge(student.age);
            setTempAvatarEmoji(student.avatarEmoji);
            setShowStudentModal(true);
          }}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 cursor-pointer pl-2 pr-3 py-1.5 rounded-2xl border border-slate-200 transition-colors group"
          title="Clique para alterar o nome e perfil do estudante/paciente"
        >
          <div className="w-8 h-8 rounded-full bg-[#0F85A5] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            {student.avatarEmoji}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-800 leading-none flex items-center gap-1">
              {student.name || 'Estudante'}
              <Settings className="w-3 h-3 text-slate-400 group-hover:text-slate-600" />
            </span>
            <span className="text-[10px] font-semibold text-slate-500">{student.xpPoints} XP • Nível {student.level}</span>
          </div>
        </div>
      </div>

      {/* Modal for Inserting / Uploading Custom Logo */}
      {showLogoModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in">
            <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Upload className="w-5 h-5 text-[#E86F37]" />
              <span>Personalizar Logotipo da Clínica / Escola</span>
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Você pode enviar a imagem do seu logotipo ou usar o logotipo padrão da clínica Mara Daher (Fonoaudiologia & Linguagem).
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  1. Carregar arquivo de imagem do computador
                </label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#0F85A5] file:text-white hover:file:bg-[#0B6C87]"
                />
              </div>

              <div className="flex items-center gap-2 my-2">
                <div className="h-[1px] bg-slate-200 flex-1"></div>
                <span className="text-[10px] uppercase text-slate-400 font-bold">ou via link URL</span>
                <div className="h-[1px] bg-slate-200 flex-1"></div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  2. Cole o Link da URL da imagem
                </label>
                <div className="flex gap-2">
                  <input 
                    type="url" 
                    placeholder="https://exemplo.com/minha-logo.png"
                    value={tempLogoInput}
                    onChange={(e) => setTempLogoInput(e.target.value)}
                    className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F85A5]"
                  />
                  <button
                    onClick={() => {
                      if (tempLogoInput.trim()) {
                        onLogoUpload(tempLogoInput.trim());
                        setShowLogoModal(false);
                      }
                    }}
                    className="px-3 py-2 bg-[#0F85A5] text-white rounded-xl text-xs font-bold"
                  >
                    Usar
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                <button
                  onClick={() => {
                    onLogoUpload(null); // Reset to default Mara Daher logo
                    setShowLogoModal(false);
                  }}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restaurar Logo Mara Daher</span>
                </button>

                <button
                  onClick={() => setShowLogoModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal for Editing Student / Patient Profile */}
      {showStudentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in">
            <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-2xl">✍️</span>
              <span>Identificação do Estudante / Paciente</span>
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Digite o nome do paciente ou estudante atendido para personalizar os relatórios, rascunhos e impressões da sessão.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome do Estudante / Paciente
                </label>
                <input 
                  type="text"
                  value={tempStudentName}
                  onChange={(e) => setTempStudentName(e.target.value)}
                  placeholder="Ex: Lucas, Sofia, ou deixe em branco"
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F85A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Idade (anos)
                </label>
                <input 
                  type="number"
                  min={5}
                  max={18}
                  value={tempStudentAge}
                  onChange={(e) => setTempStudentAge(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F85A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Avatar / Ícone
                </label>
                <div className="flex gap-2 pt-1">
                  {['✍️', '🧠', '🌟', '🚀', '📚', '🎨', '🏆', '🦄'].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setTempAvatarEmoji(emoji)}
                      className={`w-9 h-9 text-lg rounded-xl flex items-center justify-center transition-all ${
                        tempAvatarEmoji === emoji
                          ? 'bg-[#0F85A5] text-white scale-110 shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowStudentModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onUpdateStudentProfile) {
                      onUpdateStudentProfile({
                        name: tempStudentName,
                        age: tempStudentAge,
                        avatarEmoji: tempAvatarEmoji
                      });
                    }
                    setShowStudentModal(false);
                  }}
                  className="px-5 py-2 bg-[#0F85A5] hover:bg-[#0B6C87] text-white rounded-xl text-xs font-bold shadow-md"
                >
                  Salvar Perfil ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
