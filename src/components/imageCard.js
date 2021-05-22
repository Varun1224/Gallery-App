/* rafce to print the boilerplate like in html */
import React from 'react';

const imagecard = ({image}) => {

  const tags = image.tags.split(',')
  
  return (
    <div>
    {/* create a card first  */}
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 pt-4">
        <div className="font-bold text-purple-500 text-xl">
          photo by {image.user}
       </div>
        <ul>
          <li>
            <strong>Views: </strong>
           {image.views}
         </li>
          <li>
            <strong>downloads: </strong>
           {image.downloads}
         </li>
          <li>
            <strong>Likes: </strong>
           {image.likes}
         </li>
        </ul>
      </div>
      <div className="px-6 py-4">
       
        {tags.map((tag , index)=> (
        <span key={index} className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
       </span>
       ))}
        

       
      </div>
    </div>
  </div>
  )
}

export default imagecard;
