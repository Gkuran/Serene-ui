import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerVertical: {
    flexDirection: 'row',
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.sm,
  },
  stepsContainerVertical: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: theme.spacing.md,
  },
  stepWrapper: {
    flex: 1,
    alignItems: 'center',
    minWidth: 60,
  },
  stepWrapperVertical: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.lg,
    minHeight: 60,
  },
  stepContainer: {
    alignItems: 'center',
    flex: 1,
  },
  stepContent: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  stepContentVertical: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.xs,
  },
  stepCircleVertical: {
    marginBottom: 0,
    marginRight: theme.spacing.md,
  },
  stepNumber: {
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.semibold,
    fontFamily: theme.fontFamily.body,
  },
  stepTextContainer: {
    alignItems: 'center',
    maxWidth: 80,
  },
  stepTextContainerVertical: {
    alignItems: 'flex-start',
    maxWidth: 'none',
    flex: 1,
  },
  stepTitle: {
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.medium,
    fontFamily: theme.fontFamily.body,
    textAlign: 'center',
    marginBottom: 2,
  },
  stepTitleVertical: {
    textAlign: 'left',
    fontSize: theme.fontSize.sm,
    marginBottom: theme.spacing.xs,
  },
  stepDescription: {
    fontSize: 10,
    fontFamily: theme.fontFamily.body,
    lineHeight: 12,
    textAlign: 'center',
  },
  stepDescriptionVertical: {
    textAlign: 'left',
    fontSize: theme.fontSize.xs,
    lineHeight: 16,
  },
  stepContentContainer: {
    marginTop: theme.spacing.md,
    width: '100%',
    paddingHorizontal: theme.spacing.md,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.md,
  },
});

export const stepStyles = {
  completed: {
    circle: {
      backgroundColor: theme.colors.primary,
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
    number: {
      color: theme.colors.white,
    },
    title: {
      color: theme.colors.textPrimary,
      fontWeight: theme.fontWeight.semibold,
    },
    description: {
      color: theme.colors.textSecondary,
    },
  },
  active: {
    circle: {
      backgroundColor: theme.colors.primary,
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
    number: {
      color: theme.colors.white,
    },
    title: {
      color: theme.colors.textPrimary,
      fontWeight: theme.fontWeight.semibold,
    },
    description: {
      color: theme.colors.textSecondary,
    },
  },
  inactive: {
    circle: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: theme.colors.border,
    },
    number: {
      color: theme.colors.disabled,
    },
    title: {
      color: theme.colors.disabled,
      fontWeight: theme.fontWeight.normal,
    },
    description: {
      color: theme.colors.disabled,
    },
  },
  disabled: {
    circle: {
      backgroundColor: theme.colors.background,
      borderWidth: 2,
      borderColor: theme.colors.border,
    },
    number: {
      color: theme.colors.disabled,
    },
    title: {
      color: theme.colors.disabled,
      fontWeight: theme.fontWeight.normal,
    },
    description: {
      color: theme.colors.disabled,
    },
  },
};

