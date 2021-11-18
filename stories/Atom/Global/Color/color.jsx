import React from 'react';
import icon from '../../../assets/images/polygon.png';
import './color.scss';

export const Color = ({
  PrimaryColor, AccentColor, Balancepalette, Primarytext,
}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };

  return (
    <div className="color-wrapper">
      <div className="color__row">
        <div className="color__title Primary">{PrimaryColor}</div>
        <div className="color__define">
          <div className="color__name">
            <div className="color__box p-blue-100" />
            <div className="color__code">blue-100</div>
          </div>
          <div className="color__name">
            <div className="color__box p-blue-200" />
            <div className="color__code">blue-200</div>
          </div>
          <div className="color__name">
            <div className="color__box p-blue-300" />
            <div className="color__code">blue-300</div>
          </div>
          <div className="color__name">
            <div className="color__box p-blue-400" />
            <div className="color__code">blue-400</div>
          </div>
          <div className="color__name">
            <div className="color__box p-blue-500" />
            <div className="color__code">blue-500</div>
          </div>
          <div className="color__name">
            <div className="Primary-text">
              {Primarytext}
              <div className="polygon"><img src={image.src} alt={image.alt} /></div>
            </div>
            <div className="color__box p-blue-600" />
            <div className="color__code">blue-600</div>
          </div>
          <div className="color__name">
            <div className="color__box p-blue-700" />
            <div className="color__code">blue-700</div>
          </div>
        </div>
      </div>
      <div className="color__row">
        <div className="color__title Gary" />
        <div className="color__define">
          <div className="color__name">
            <div className="color__box p-gray-100" />
            <div className="color__code">gray-100</div>
          </div>
          <div className="color__name">
            <div className="color__box p-gray-200" />
            <div className="color__code">gray-200</div>
          </div>
          <div className="color__name">
            <div className="color__box p-gray-300" />
            <div className="color__code">gray-300</div>
          </div>
          <div className="color__name">
            <div className="Primary-text">
              {Primarytext}
              <div className="polygon"><img src={image.src} alt={image.alt} /></div>
            </div>
            <div className="color__box p-gray-400" />
            <div className="color__code">gray-400</div>
          </div>
          <div className="color__name">
            <div className="color__box p-gray-500" />
            <div className="color__code">gray-500</div>
          </div>
          <div className="color__name">
            <div className="color__box p-gray-600" />
            <div className="color__code">gray-600</div>
          </div>
          <div className="color__name">
            <div className="color__box p-gray-700" />
            <div className="color__code">gray-700</div>
          </div>
        </div>
      </div>
      <div className="color__row">
        <div className="color__title Gary">{AccentColor}</div>
        <div className="color__define_wrapper">
          <div className="color__define">
            <div className="color__name">
              <div className="color__box light-yellow" />
              <div className="color__code">light-yellow</div>
            </div>
            <div className="color__name">
              <div className="color__box yellow" />
              <div className="color__code">yellow</div>
            </div>
            <div className="color__name">
              <div className="color__box dark-yellow" />
              <div className="color__code">dark-yellow</div>
            </div>
            <div className="color__name">
              <div className="color__box " />
            </div>
            <div className="color__name">
              <div className="color__box light-red" />
              <div className="color__code">light-red</div>
            </div>
            <div className="color__name">
              <div className="color__box red" />
              <div className="color__code">red</div>
            </div>
            <div className="color__name">
              <div className="color__box dark-red" />
              <div className="color__code">dark-red</div>
            </div>
          </div>
        </div>
      </div>
      <div className="color__row">
        <div className="color__title Gary" />
        <div className="color__define_wrapper">
          <div className="color__define">
            <div className="color__name">
              <div className="color__box light-green" />
              <div className="color__code">light-green</div>
            </div>
            <div className="color__name">
              <div className="color__box green" />
              <div className="color__code">green</div>
            </div>
            <div className="color__name">
              <div className="color__box dark-green" />
              <div className="color__code">dark-green</div>
            </div>
            <div className="color__name">
              <div className="color__box " />
            </div>
            <div className="color__name">
              <div className="color__box light-azure" />
              <div className="color__code">light-azure</div>
            </div>
            <div className="color__name">
              <div className="color__box azure" />
              <div className="color__code">azure</div>
            </div>
            <div className="color__name">
              <div className="color__box dark-azure" />
              <div className="color__code">dark-azure</div>
            </div>
          </div>
        </div>
      </div>
      <div className="color__row full">
        <div className="color__title Gary ">{Balancepalette}</div>
        <div className="color__define_balance">
          <div className="color__name bl-1">
            <div className="color__box p-gray-100 " />
            <div className="color__code">gray-100</div>
          </div>
          <div className="color__name bl-2">
            <div className="color__box p-gray-200 " />
            <div className="color__code">gray-200</div>
          </div>
          <div className="color__name bl-3">
            <div className="color__box p-gray-400 " />
            <div className="color__code">gray-400</div>
          </div>
          <div className="color__name bl-4">
            <div className="color__box p-gray-700 " />
            <div className="color__code">gray-700</div>
          </div>
          <div className="color__name bl-5">
            <div className="color__box p-blue-600 " />
            <div className="color__code">blue-600</div>
          </div>
          <div className="color__name bl-6">
            <div className="color__box dark-red " />
            <div className="color__code">dark-red </div>
          </div>
        </div>
      </div>
    </div>
  );
};
