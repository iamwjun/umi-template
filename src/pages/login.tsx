import { useOutletContext } from 'umi';

import styles from './index.less';

export default function LoginPage() {
  const a = useOutletContext();
  console.log('docs', a);
  
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>登录</h1>
    </div>
  );
}
