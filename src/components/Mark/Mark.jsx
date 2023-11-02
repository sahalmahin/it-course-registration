import PropTypes from 'prop-types';

const Mark = ({ mark }) => {

    const { title } = mark;
     
        return (
            <div id='count' className='bg-white m-1 p-1 rounded-xl text-xl text-gray-500'>
                <h3>{title}</h3>
            </div>
        );
};

Mark.propTypes = {
    mark: PropTypes.object
}

export default Mark;