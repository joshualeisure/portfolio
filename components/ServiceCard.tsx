import React from 'react';
import { FunctionComponent } from 'react';
import { IService } from '../type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title }
}) => {

  const createMarkup = () => {
    return {
      __html:about
    }
  }
  return (
    <div className='flex items-center p-2 spacing-x-4'>
      <Icon className='w-40 h-40 pr-3 sm:w-28 sm:h-28 lg:w-52 lg:h-52 text-green'/>
      <div>
        <h4 className='font-bold'>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  );
};

export default ServiceCard;
