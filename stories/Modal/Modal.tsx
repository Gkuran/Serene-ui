import React, { ReactNode } from 'react';
import { Modal as RNModal, View, Text, TouchableOpacity } from 'react-native';
import { CloseButton } from '../CloseButton/CloseButton';
import { styles } from './Modal.styles';

export interface ModalProps {
  /** Se o modal está visível */
  visible: boolean;
  /** Função chamada ao fechar o modal */
  onClose: () => void;
  /** Título do modal */
  title: string;
  /** Subtítulo do modal */
  subtitle?: string;
  /** Conteúdo do modal */
  children: ReactNode;
}

export const Modal = ({
  visible,
  onClose,
  title,
  subtitle,
  children,
}: ModalProps) => {
  return (
    <RNModal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <TouchableOpacity 
          style={styles.modal} 
          activeOpacity={1} 
          onPress={() => {}}
        >
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.title}>{title}</Text>
              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            <CloseButton onPress={onClose} />
          </View>
          
          <View style={styles.content}>
            {children}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </RNModal>
  );
};