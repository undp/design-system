import React from 'react';
import './FormTypes.scss';
import { Inputcomponent } from '../Inputfields/Input_group';
import { Image } from '../../../Atom/Images/Image/Image';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
  
export const FormTypes = ({
  element,
  type,
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
  <form>
    <div className="grid-container form-wrapper">
      {args.variant === "text panel and form" && (
        <div className='text-panel'>
          <div className="grid-x grid-margin-x grid-margin-y">
            <div className="medium-5 cell large-offset-1 mt-0">
              <Heading type="2" label={anchorTag} />
              <p>{para}</p>
            </div>
            <div className="large-4 medium-6 cell medium-offset-1">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Inputcomponent
                    element={element}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    mode={mode}
                  />
                </div>
                <div className="cell">
                  <Inputcomponent
                    element={element}
                    type={type}
                    placeholder={placeholderemail}
                    required={required}
                    mode={mode}
                  />
                </div>

                <div className="cell">
                  {" "}
                  <button type="submit" className="button button-primary">
                    {button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {args.variant === "form with photo" && (
        <div className="grid-x grid-margin-x form-photo">
          <div className="medium-5 cell">
            <Image />
          </div>
          <div className="medium-7 cell form-bg">
            <div className="grid-x stacked-form">
              <div className="cell medium-8 medium-offset-2">
                <Heading type="2" label={anchorTag} />
                <p>{para}</p>
              </div>
              <div className="cell medium-8 medium-offset-2">
                <Inputcomponent
                  element={element}
                  type={type}
                  placeholder={placeholder}
                  required={required}
                  mode={mode}
                />
              </div>
              <div className="cell medium-8 medium-offset-2">
                <Inputcomponent
                  element={element}
                  type={type}
                  placeholder={placeholderemail}
                  required={required}
                  mode={mode}
                />
              </div>
              <div className="cell medium-8 medium-offset-2">
                <button type="submit" className="button button-primary">
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {args.variant === "wide form" && (
        <div className="wide-form">
          <div className="grid-x grid-margin-x">
            <div className="large-8 cell">
              <div className="grid-x">
                <div className="large-12 cell">
                  <Heading type="2" label={anchorTag2} />
                </div>
              </div>
              <div className="grid-x grid-margin-x">
                <div className="medium-6 cell">
                  <Inputcomponent
                    element={element}
                    type={type}
                    placeholder={placeholderfirst}
                    required={required}
                    mode={mode}
                  />
                </div>
                <div className="medium-6 cell">
                  <Inputcomponent
                    element={element}
                    type={type}
                    placeholder={placeholderlast}
                    required={required}
                    mode={mode}
                  />
                </div>
                <div className="medium-12 cell">
                  <Inputcomponent
                    element={element}
                    type={type}
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
        </div>
      )}
      {args.variant === "stacked form" && (
        <div className='stacked-form'>
          <div className="grid-x grid-margin-x grid-margin-y">
            <div className="large-4 medium-6 cell">
              <div className="grid-x">
                <div className="large-12 cell">
                  <Heading type="2" label={anchorTag} />
                  <p>{para}</p>
                  <div className="grid-x">
                    <div className="cell">
                      <Inputcomponent
                        element={element}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        mode={mode}
                      />
                    </div>
                    <div className="cell">
                      <Inputcomponent
                        element={element}
                        type={type}
                        placeholder={placeholderemail}
                        required={required}
                        mode={mode}
                      />
                    </div>
                    <div className="cell">
                      <button type="submit" className="button button-primary">
                        {button}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </form>
);
