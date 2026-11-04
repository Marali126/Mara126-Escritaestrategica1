import React from 'react';
import { WritingDraft, StudentProfile } from '../types';
import { MARA_DAHER_LOGO_SVG } from '../data/defaultLogo';
import { Printer, Download, X, FileText, CheckCircle2 } from 'lucide-react';

interface PrintExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  draft: WritingDraft;
  student: StudentProfile;
  customLogoUrl: string | null;
}

export const PrintExportModal: React.FC<PrintExportModalProps> = ({
  isOpen,
  onClose,
  draft,
  student,
  customLogoUrl
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:border-0 print:w-full">
        
        {/* Modal Top Bar (Hidden during print) */}
        <div className="bg-slate-900 p-4 text-white flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E86F37]" />
            <h2 className="font-bold text-sm">Visualização de Impressão e Relatório SRSD</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#0F85A5] hover:bg-[#0B6C87] text-white text-xs font-bold rounded-xl shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Area */}
        <div className="p-8 overflow-y-auto space-y-6 text-slate-800 font-serif print:p-0 print:overflow-visible">
          
          {/* Header with Logo */}
          <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4">
            <div className="w-60 md:w-72 h-20 md:h-24 flex items-center justify-start">
              {customLogoUrl ? (
                <img src={customLogoUrl} alt="Logo Mara Daher" className="h-full object-contain" />
              ) : (
                <div className="h-full w-full flex items-center justify-start" dangerouslySetInnerHTML={{ __html: MARA_DAHER_LOGO_SVG }} />
              )}
            </div>

            <div className="text-right text-xs font-sans text-slate-600">
              <p className="font-bold text-slate-900 text-sm">Relatório do Escritor SRSD</p>
              <p>Autor(a): <strong>{student.name}</strong> ({student.age} anos)</p>
              <p>Data: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>

          {/* Essay Title & Content */}
          <div>
            <h1 className="text-2xl font-bold font-serif text-slate-900 mb-3 border-b pb-1">
              {draft.title || 'Produção Sem Título'}
            </h1>
            <div className="text-base leading-relaxed text-slate-800 whitespace-pre-wrap min-h-[160px]">
              {draft.content || 'Nenhum texto escrito ainda.'}
            </div>
          </div>

          {/* SRSD Planning Note Map Summary */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-300 font-sans text-xs space-y-2 break-inside-avoid">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-[#0F85A5]">
              📋 Mapa de Planejamento Estratégico (POE + TREE / Roteiro)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
              {draft.strategyItems.map(item => (
                <div key={item.id} className="flex items-start gap-2 bg-white p-2 rounded-xl border border-slate-200">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${item.checked ? 'text-emerald-600' : 'text-slate-300'}`} />
                  <div>
                    <strong className="text-slate-900">{item.letter} - {item.title}:</strong>
                    <p className="text-slate-600 italic">{item.value || (item.checked ? 'Concluído' : 'Não preenchido')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Talk & Reflection */}
          {draft.selfTalkSelected && (
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 font-sans text-xs text-slate-800 break-inside-avoid">
              <strong className="text-[#E86F37]">🧠 Fala Interna Autorregulada Utilizada:</strong>
              <p className="italic mt-0.5">"{draft.selfTalkSelected}"</p>
            </div>
          )}

          {/* Clinician / Teacher Signature Line */}
          <div className="pt-8 border-t border-slate-300 flex justify-between text-xs font-sans text-slate-500 break-inside-avoid">
            <div>
              _______________________________________<br />
              Assinatura do Aluno(a)
            </div>
            <div className="text-right">
              _______________________________________<br />
              Mara Daher - Fonoaudiologia & Aprendizagem
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
