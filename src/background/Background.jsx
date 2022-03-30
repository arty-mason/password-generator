import cs from 'classnames';
import styles from './Background.module.css';

function Background(props) {
  const { className, children } = props;
  return (
    <div className={cs(styles.background, className)}>
      {children}
    </div>
  );
}

export default Background;