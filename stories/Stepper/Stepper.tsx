import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../Button/Button';
import { styles, stepStyles } from './Stepper.styles';

export interface Step {
  /** Step title */
  title: string;
  /** Step description (optional) */
  description?: string;
  /** Step content (optional) */
  content?: ReactNode;
  /** Whether step is completed */
  completed?: boolean;
  /** Whether step is disabled */
  disabled?: boolean;
}

export interface StepperProps {
  /** Array of steps */
  steps: Step[];
  /** Current active step index */
  currentStep: number;
  /** Function called when a step is pressed */
  onStepPress?: (stepIndex: number) => void;
  /** Function called when previous button is pressed */
  onPrevious?: () => void;
  /** Function called when next button is pressed */
  onNext?: () => void;
  /** Show navigation buttons */
  showNavigation?: boolean;
  /** Previous button text */
  previousText?: string;
  /** Next button text */
  nextText?: string;
  /** Stepper orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Show step numbers */
  showNumbers?: boolean;
  /** Show step descriptions */
  showDescriptions?: boolean;
  /** Custom step content */
  children?: ReactNode;
}

export const Stepper = ({
  steps,
  currentStep,
  onStepPress,
  onPrevious,
  onNext,
  showNavigation = true,
  previousText = 'Previous step',
  nextText = 'Next step',
  orientation = 'horizontal',
  showNumbers = true,
  showDescriptions = true,
  children,
}: StepperProps) => {
  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'inactive';
  };

  const renderStep = (step: Step, stepIndex: number) => {
    const status = getStepStatus(stepIndex);
    const isClickable = onStepPress && !step.disabled;
    const isCompleted = status === 'completed';
    const isActive = status === 'active';

    const StepContent = () => (
      <View style={styles.stepContainer}>
        <View style={[
          styles.stepContent,
          orientation === 'vertical' && styles.stepContentVertical
        ]}>
          {/* Step Circle */}
          <View style={[
            styles.stepCircle,
            orientation === 'vertical' && styles.stepCircleVertical,
            stepStyles[status].circle
          ]}>
            {showNumbers && (
              <Text style={[styles.stepNumber, stepStyles[status].number]}>
                {isCompleted ? '✓' : stepIndex + 1}
              </Text>
            )}
          </View>

          {/* Step Text */}
          <View style={[
            styles.stepTextContainer,
            orientation === 'vertical' && styles.stepTextContainerVertical
          ]}>
            <Text style={[
              styles.stepTitle,
              orientation === 'vertical' && styles.stepTitleVertical,
              stepStyles[status].title
            ]}>
              {step.title}
            </Text>
            {showDescriptions && step.description && (
              <Text style={[
                styles.stepDescription,
                orientation === 'vertical' && styles.stepDescriptionVertical,
                stepStyles[status].description
              ]}>
                {step.description}
              </Text>
            )}
          </View>
        </View>

        {/* Step Content */}
        {isActive && step.content && (
          <View style={styles.stepContentContainer}>
            {step.content}
          </View>
        )}
      </View>
    );

    if (isClickable) {
      return (
        <TouchableOpacity
          key={stepIndex}
          onPress={() => onStepPress(stepIndex)}
          activeOpacity={0.7}
        >
          <StepContent />
        </TouchableOpacity>
      );
    }

    return <StepContent key={stepIndex} />;
  };

  const renderConnector = (stepIndex: number) => {
    // No connectors - clean design
    return null;
  };

  return (
    <View style={[styles.container, orientation === 'vertical' && styles.containerVertical]}>
      {children}
      
      <View style={[styles.stepsContainer, orientation === 'vertical' && styles.stepsContainerVertical]}>
        {steps.map((step, stepIndex) => (
          <View key={stepIndex} style={[
            styles.stepWrapper,
            orientation === 'vertical' && styles.stepWrapperVertical
          ]}>
            {renderStep(step, stepIndex)}
            {renderConnector(stepIndex)}
          </View>
        ))}
      </View>

      {showNavigation && (
        <View style={styles.navigationContainer}>
          <Button
            title={previousText}
            variant="outline"
            size="small"
            onPress={onPrevious}
            disabled={currentStep === 0}
          />
          <Button
            title={nextText}
            variant="primary"
            size="small"
            onPress={onNext}
            disabled={currentStep === steps.length - 1}
          />
        </View>
      )}
    </View>
  );
};
