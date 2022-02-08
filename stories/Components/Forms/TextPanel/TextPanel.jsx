import React from 'react';
import './text-panel.scss';
import { Inputcomponent } from '../InputFields/InputFields';
import { Image } from '../../../Atom/Images/Image/Image';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const FormTypes = ({
  element,
  typeemail,
  typename,
  typelname,
  required,
  mode,
  label,
  button,
  errorText,
  placeholder,
  placeholderemail,
  placeholderfirst,
  placeholderlast,
  anchorTag,
  anchorTag2,
  para,
  ...args
}) => (
  
  <div className="grid-container form-wrapper">
    <form>
      {args.variant === 'text panel and form' && (
        <div className="grid-x grid-margin-x text-panel">
          <div className="medium-5 cell large-offset-1">
            <Heading type="2" label={anchorTag} />
            <p>{para}</p>
          </div>
          <div className="large-4 medium-6 cell medium-offset-1">
            <Inputcomponent
              element={element}
              type={typename}
              placeholder={placeholder}
              required={required}
              mode={mode}
            />
            <Inputcomponent
              element={element}
              type={typeemail}
              placeholder={placeholderemail}
              required={required}
              mode={mode}
            />
            <button type="submit" className="button button-primary">
              {button}
            </button>
          </div>
        </div>
      )}
      {args.variant === 'form with photo' && (
        <div className="grid-x form-photo">
          <div className="medium-5 cell">
            <Image />
          </div>
          <div className="medium-7 cell form-bg stacked-form">
            
            <div className="grid-x">
              <div className="cell medium-8 medium-offset-2">
                <Heading type="2" label={anchorTag} />
                <p>{para}</p>
                <Inputcomponent
                  element={element}
                  type={typename}
                  placeholder={placeholder}
                  required={required}
                  mode={mode}
                />
                <Inputcomponent
                  element={element}
                  type={typeemail}
                  placeholder={placeholderemail}
                  required={required}
                  mode={mode}
                />
                <button type="submit" className="button button-primary">
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {args.variant === 'wide form' && (
        <div className="grid-x grid-margin-x wide-form">
          <div className="large-8 cell">
            <Heading type="2" label={anchorTag2} />

            <div className="grid-x grid-margin-x">
              <div className="medium-6 cell">
                <Inputcomponent
                  element={element}
                  type={typename}
                  placeholder={placeholderfirst}
                  required={required}
                  mode={mode}
                />
              </div>
              <div className="medium-6 cell">
                <Inputcomponent
                  element={element}
                  type={typelname}
                  placeholder={placeholderlast}
                  required={required}
                  mode={mode}
                />
              </div>
              <div className="medium-12 cell">
                <Inputcomponent
                  element={element}
                  type={typeemail}
                  placeholder={placeholderemail}
                  required={required}
                  mode={mode}
                />
              </div>
              <div className="medium-12 cell">
                <button type="submit" className="button button-primary">
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {args.variant === 'stacked form' && (
        <div className="grid-x grid-margin-x grid-margin-y stacked-form">
          <div className="large-4 medium-6 cell">
            <Heading type="2" label={anchorTag} />
            <p>{para}</p>
            <Inputcomponent
              element={element}
              type={typename}
              placeholder={placeholder}
              required={required}
              mode={mode}
            />
            <Inputcomponent
              element={element}
              type={typeemail}
              placeholder={placeholderemail}
              required={required}
              mode={mode}
            />
            <button type="submit" className="button button-primary">
              {button}
            </button>
          </div>
        </div>
      )}
    </form>
  </div>
);
