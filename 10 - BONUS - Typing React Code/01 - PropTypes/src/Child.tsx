import PropTypes from 'prop-types';

export default function Child({ name, age, children }) {
  return (
    <div>
      <strong>Name:</strong> {name}
      <br />
      <strong>Age:</strong> {age}
      <br />
      <strong>Age (in 10 years):</strong> {age + 10}
      <br />
      <p>{children}</p>
    </div>
  );
}

Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.node, //@ If we pass A Element as component as children then Type : PropTypes.Element
  anyTypeIsRequired: PropTypes.any.isRequired,
  randomObj: PropTypes.object,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string.isRequired,
  }).isRequired,
  peoples: PropTypes.array,
  studentsNumberArr: PropTypes.arrayOf(PropTypes.number),
  diffTypeArr: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.bool])),
  status: PropTypes.oneOf(['Active', 'Inactive']),
  user: PropTypes.exact({ id: PropTypes.number, name: PropTypes.string }),
};
