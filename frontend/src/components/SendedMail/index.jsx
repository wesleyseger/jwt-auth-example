import { useEffect } from 'react';
import sendMail from '../../assets/sendmail.webp';
import animate from '../../utils/animate';

import styles from './styles.module.scss';

export function SendedMail({ email }) {

  useEffect(()=>{
    animate('fade-in-top', [styles.sendedMailWrapper])
  }, [])

  return (
    <div className={styles.sendedMailWrapper} id="confirm-msg" >
      <img src={sendMail} alt="" />
      <h2>If a account exists for {email}, an e-mail will be sent with further instructions.</h2>
      <a href="/login">Back to Login</a>
    </div>
  )
}