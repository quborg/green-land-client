import * as Icons from '@material-ui/icons';

const dialogs = {
  default: {
    label: 'Modal',
    description: 'Describe your modal content',
    Icon: Icons.DoneRounded,
  },
  delete: {
    label: 'Delete Confirmation',
    description:
      'Delete is irreversible. Please confirm YOU are proceeding to DELETE operation!',
    Icon: Icons.DeleteRounded,
  },
  update: {
    label: 'Save changes Confirmation',
    description:
      'Please confirm YOU are proceeding to SAVE new changes!',
    Icon: Icons.SaveOutlined,
  },
};

export default dialogs;
