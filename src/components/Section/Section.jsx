import css from './Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h1 className={css.title}>{title}</h1>
    {children}
    </section>);
  
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}