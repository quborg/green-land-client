import { useEffect, useState } from 'react';

import axios from 'axios';
import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { withStyles } from '@mui/styles';
import { toast } from 'material-react-toastify';
import ClientCaptcha from 'src/packages/react-client-captcha';
import { CONST } from 'src/defs';

import style from './style';

const emailReg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const SendMail: React.FC<TYPES.SendMailProps> = ({ open, onClose, classes, theme }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ email: '', message: '', code: '' });
  const [code, setCode] = useState('');
  const [trueCode, setTrueCode] = useState('');

  const validateFields = (): boolean => {
    const vEmail = emailReg.test(email.toLowerCase());
    const vMessage = message.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, '');
    const vCode = code === trueCode;
    const vErrors = { email: '', message: '', code: '' };
    if (!vEmail) vErrors.email = 'البريد الإلكتروني غير صحيح';
    if (!vMessage) vErrors.message = 'يجب إملاء نص الرسالة';
    if (!vCode) vErrors.code = 'الكود غير مطابق';
    setErrors(vErrors);
    return !vEmail || !vMessage || !vCode ? false : true;
  };

  const sendMail = () => {
    const valid = validateFields();
    if (valid)
      axios
        .post(CONST.Server.POST_EMAIL, { email, message })
        .then(({ data }) => {
          if (data?.response === 'ok') toast.info('لقد تم الإرسال بنجاح');
          else toast.error('عطب في خادم لارسائل, المرجو الإعادة.');
          onClose();
        })
        .catch((e) => {
          toast.error('خادم الرسائل معطل, المرجو الإعادة لاحقا.');
          onClose();
        });
  };

  return (
    <Modal keepMounted open={open} onClose={onClose}>
      <Box className={classes.wrapper}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          إتصل بنا
        </Typography>
        <Box mt={2} sx={{ '& > div': { mb: 2 } }}>
          <FormControl fullWidth>
            <TextField
              fullWidth
              type="email"
              label="البريد الإلكتروني"
              onChange={(e) => setEmail(e.target.value)}
              placeholder=".."
              size="small"
              value={email}
              variant="outlined"
              required
              error={!!errors.email}
              helperText={errors.email}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              label="نص الرسالة"
              rows={5}
              multiline
              onChange={(e) => setMessage(e.target.value)}
              placeholder=".."
              size="small"
              value={message}
              variant="outlined"
              required
              error={!!errors.message}
              helperText={errors.message}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              className={classes.captcha}
              label="كود التحقق"
              onChange={(e) => setCode(e.target.value)}
              placeholder=".."
              size="small"
              value={code}
              variant="outlined"
              required
              error={!!errors.code}
              helperText={errors.code}
              InputProps={{
                endAdornment: <ClientCaptcha captchaCode={(c) => setTrueCode(c)} />,
              }}
            />
          </FormControl>
        </Box>
        <Box
          className={classes.controls}
          display="flex"
          width="100%"
          justifyContent="space-around"
          py={2}>
          <Button variant="contained" onClick={() => sendMail()} startIcon={<Icons.Send />}>
            إرسال
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => onClose()}
            startIcon={<Icons.Cancel />}>
            إلغاء
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default withStyles(style, { withTheme: true })(SendMail);
