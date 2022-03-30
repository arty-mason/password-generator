
import cs from 'classnames'
import styles from './Wrapper.module.css'


function Wrapper(props) {
  const { className, children } = props;
  return (
    <div className={cs(styles.wrapper, className)}>
      {children}
    </div>
  );
}

export default Wrapper;
