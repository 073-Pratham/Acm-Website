
function EventCard(props) {
  return (
    <div className="bg-off-white mb-4 mt-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <div className="relative pb-1/1">
          <img className="absolute inset-0 w-full h-full object-cover object-center" src='/imgs/img1.jpg' alt="" />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

// const events = [
//   {
//     url: "/imgs/img1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/img2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/img3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/img4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/img5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/img6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/img7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];


export default EventCard;
