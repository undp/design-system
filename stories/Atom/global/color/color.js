import React from 'react';
import icon from '../../../../stories/assets/images/polygon.png'

export const Color = ({}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };

  return (
    <div className="color-wrapper">

        <div className="color__row">
          <div className="color__title Primary">Primary Color</div>
          <div className="color__define">
            <div className="color__name">
                <div className="color__box p-blue-100"></div>
                <div className="color__code">blue-100</div>
            </div>
            <div className="color__name">
                <div className="color__box p-blue-200"></div>
                <div className="color__code">blue-200</div>
            </div>
            <div className="color__name">
                <div className="color__box p-blue-300"></div>
                <div className="color__code">blue-300</div>
            </div>
            <div className="color__name">
                <div className="color__box p-blue-400"></div>
                <div className="color__code">blue-400</div>
            </div>
            <div className="color__name">
                <div className="color__box p-blue-500"></div>
                <div className="color__code">blue-500</div>
            </div>
            <div className="color__name">
                <div className="Primary-text">Primary
                    <span className="polygon"><img src={ image.src } alt={ image.alt } /></span>
                </div>
                <div className="color__box p-blue-600"></div>
                <div className="color__code">blue-600</div>
            </div>
            <div className="color__name">
                <div className="color__box p-blue-700"></div>
                <div className="color__code">blue-700</div>
            </div>
          </div>
        </div>

        <div className="color__row">
          <div className="color__title Gary">Primary Color Gray</div>
          <div className="color__define">
            <div className="color__name">
                <div className="color__box p-gray-100"></div>
                <div className="color__code">gray-100</div>
            </div>
            <div className="color__name">
                <div className="color__box p-gray-200"></div>
                <div className="color__code">gray-200</div>
            </div>
            <div className="color__name">
                <div className="color__box p-gray-300"></div>
                <div className="color__code">gray-300</div>
            </div>
            <div className="color__name">
                <div className="Primary-text">Primary
                <span className="polygon"><img src={ image.src } alt={ image.alt } /></span>
                </div>
                <div className="color__box p-gray-400"></div>
                <div className="color__code">gray-400</div>
            </div>
            <div className="color__name">
                <div className="color__box p-gray-500"></div>
                <div className="color__code">gray-500</div>
            </div>
            <div className="color__name">
                <div className="color__box p-gray-600"></div>
                <div className="color__code">gray-600</div>
            </div>
            <div className="color__name">
                <div className="color__box p-gray-700"></div>
                <div className="color__code">gray-700</div>
            </div>
          </div>
        </div>

        <div className="color__row">
          <div className="color__title Gary">Accent Color</div>
            <div className="color__define_wrapper">
              <div className="color__define">
                <div className="color__name">
                    <div className="color__box light-yellow"></div>
                    <div className="color__code">light-yellow</div>
                </div>
                <div className="color__name">
                    <div className="color__box yellow"></div>
                    <div className="color__code">yellow</div>
                </div>
                <div className="color__name">
                    <div className="color__box dark-yellow"></div>
                    <div className="color__code">dark-yellow</div>
                </div>

                 <div className="color__name">
                    <div className="color__box "></div>
                </div>

                 <div className="color__name">
                    <div className="color__box light-red"></div>
                    <div className="color__code">light-red</div>
                </div>
                <div className="color__name">
                    <div className="color__box red"></div>
                    <div className="color__code">red</div>
                </div>
                <div className="color__name">
                    <div className="color__box dark-red"></div>
                    <div className="color__code">dark-red</div>
                </div>
              </div>
          </div>
        </div>

        <div className="color__row">
          <div className="color__title Gary">Accent Color green/azure</div>
            <div className="color__define_wrapper">
              <div className="color__define">
                <div className="color__name">
                    <div className="color__box light-green"></div>
                    <div className="color__code">light-green</div>
                </div>
                <div className="color__name">
                    <div className="color__box green"></div>
                    <div className="color__code">green</div>
                </div>
                <div className="color__name">
                    <div className="color__box dark-green"></div>
                    <div className="color__code">dark-green</div>
                </div>

                 <div className="color__name">
                    <div className="color__box "></div>
                </div>

                 <div className="color__name">
                    <div className="color__box light-azure"></div>
                    <div className="color__code">light-azure</div>
                </div>
                <div className="color__name">
                    <div className="color__box azure"></div>
                    <div className="color__code">azure</div>
                </div>
                <div className="color__name">
                    <div className="color__box dark-azure"></div>
                    <div className="color__code">dark-azure</div>
                </div>
              </div>
          </div>
        </div>
     
        <div className="color__row full">
          <div className="color__title Gary ">Balance of color palette</div>
             <div className="color__define_balance">
                <div className="color__name bl-1">
                    <div className="color__box p-gray-100 "></div>
                    <div className="color__code">gray-100</div>
                </div>
                <div className="color__name bl-2">
                    <div className="color__box p-gray-200 "></div>
                    <div className="color__code">gray-200</div>
                </div>
                <div className="color__name bl-3">
                    <div className="color__box p-gray-400 "></div>
                    <div className="color__code">gray-400</div>
                </div>
                <div className="color__name bl-4">
                    <div className="color__box p-gray-700 "></div>
                    <div className="color__code">gray-700</div>
                </div>
                <div className="color__name bl-5">
                    <div className="color__box p-blue-600 "></div>
                    <div className="color__code">blue-600</div>
                </div>
                <div className="color__name bl-6">
                    <div className="color__box dark-red "></div>
                    <div className="color__code">dark-red </div>
                </div>
            </div>
        </div>
    </div>
  );
};
