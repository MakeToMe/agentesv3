import React from 'react';
import { Trash2, Upload } from 'lucide-react';
import type { TrainingData } from '../../../types/training';

interface ActionButtonsProps {
  training: TrainingData;
  onOpenModal: (id: string, phase: string) => void;
  onOpenDeleteModal: (training: TrainingData) => void;
  isDeletingTraining: string | null;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  training,
  onOpenModal,
  onOpenDeleteModal,
  isDeletingTraining
}) => {
  return (
    <div className="flex justify-end gap-4">
      {training.fase !== 'finalizado' && (
        <div className="flex flex-col items-center">
          <div
            className="p-2 rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
            onClick={() => onOpenModal(training.uid, training.fase)}
            style={{ backgroundColor: 'rgba(0, 209, 157, 0.1)' }}
          >
            <Upload className="w-5 h-5" style={{ color: '#00D19D' }} />
          </div>
          <span className="text-xs mt-1" style={{ color: '#00D19D' }}>
            Upload
          </span>
        </div>
      )}
      <div className="flex flex-col items-center">
        <div
          className="p-2 rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
          onClick={() => onOpenDeleteModal(training)}
          style={{ backgroundColor: 'rgba(255, 71, 87, 0.1)' }}
        >
          <Trash2 className="w-5 h-5" style={{ color: '#FF4757' }} />
        </div>
        <span className="text-xs mt-1" style={{ color: '#FF4757' }}>
          Excluir
        </span>
      </div>
    </div>
  );
};
