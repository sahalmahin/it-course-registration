import PropTypes from 'prop-types';
import Mark from '../Mark/Mark';

const Marks = ({ marks, credit }) => {
    return (
        <div className="w-[380px] h-[800px] bg-white rounded-xl p-5">
            <h3 className="font-bold text-blue-500 text-xl border-b border-gray-200 pb-4 my-3">Credit Hour Remaining <span>20</span> hr</h3>
            <h1 className="font-bold text-black text-2xl mb-8">Course Name</h1>

                {
                    marks.map((mark, idx) => <Mark key={idx} mark={mark}></Mark>)
                }
          

            <p className="font-semibold text-gray-500 text-lg mt-8 mb-2  border-t border-gray-200 pt-4">Total Credit Hour : {credit}</p>
            <p className="font-semibold text-gray-700 text-xl  border-t border-gray-200 pt-4">Total Price : USD</p>
        </div>
    );
};

Marks.propTypes = {
    marks: PropTypes.array,
    credit: PropTypes.number
}

export default Marks;