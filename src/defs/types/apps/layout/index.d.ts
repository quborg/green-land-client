declare namespace TYPES {
  type LayoutProps = ClassesProps & Theme;

  type TopBarProps = ClassesProps;

  type SendMailProps = ClassesProps & Theme & { open: boolean; onClose: React.Dispatch };
}
