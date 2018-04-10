import React from 'react'
import { Debounce } from 'react-throttle'

export default ({ placeholder, label, change }) => (
  <div>
    <div className='page__section'>
      <label className='field field_type2'>
        <Debounce time='400' handler='onChange'>
          <input
            className='field__input'
            placeholder={placeholder}
            onChange={e => {
              change(e.currentTarget.value)
            }}
          />
        </Debounce>
        <span className='field__label-wrap'>
          <span className='field__label'>{label}</span>
        </span>
      </label>
    </div>
    <style  jsx="true" >{`
      .page__section:not(:first-child) {
        margin-top: 7rem;
      }

      .field {
        --uiFieldPaddingTop: var(--fieldPaddingTop, 0px);
        --uiFieldPaddingRight: var(--fieldPaddingRight, 0px);
        --uiFieldPaddingBottom: var(--fieldPaddingBottom, 0px);
        --uiFieldPaddingLeft: var(--fieldPaddingLeft, 0px);

        --uiFieldBorderColor: var(--fieldBorderColor, transpatent);
        --uiFieldBorderTop: var(--fieldBorderTop, 0px);
        --uiFieldBorderRight: var(--fieldBorderRight, 0px);
        --uiFieldBorderBottom: var(--fieldBorderBottom, 0px);
        --uiFieldBorderLeft: var(--fieldBorderLeft, 0px);

        --uiFieldBgColor: var(--fieldBgColor, transpatent);
        --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
        --uiFieldAnimationDuration: var(--fieldAnimationDuration, 0.3s);
        --uiFieldFonstSize: var(--fieldFontSize, 16px);

        position: relative;
        display: block;
      }

      .field__input {
        width: 100%;
        box-sizing: border-box;
        background-color: var(--uiFieldBgColor);

        /* for iOS */
        appearance: none;
        border-radius: 0;

        border-style: solid;
        border-color: var(--uiFieldBorderColor);

        border-top-width: var(--uiFieldBorderTop);
        border-right-width: var(--uiFieldBorderRight);
        border-bottom-width: var(--uiFieldBorderBottom);
        border-left-width: var(--uiFieldBorderLeft);

        padding-top: var(--uiFieldPaddingTop);
        padding-right: var(--uiFieldPaddingRight);
        padding-bottom: var(--uiFieldPaddingBottom);
        padding-left: var(--uiFieldPaddingLeft);

        font-family: inherit;
        font-size: 100%;
        color: inherit;
      }

      .field__input::-webkit-input-placeholder {
        color: var(--uiFieldPlaceholderColor);
        opacity: 0;
      }

      .field__input::-moz-placeholder {
        color: var(--uiFieldPlaceholderColor);
        opacity: 0;
      }

      .field__input:focus {
        outline: none;
      }

      .field__input:focus::-webkit-input-placeholder {
        transition: opacity var(--uiFieldAnimationDuration) ease-out
          var(--uiFieldAnimationDuration);
        opacity: 1;
      }

      .field__input:focus::-moz-placeholder {
        transition: opacity var(--uiFieldAnimationDuration) ease-out
          var(--uiFieldAnimationDuration);
        opacity: 1;
      }

      .field__label-wrap {
        display: block;
      }

      .field__label {
        position: absolute;
        top: calc(0px + var(--uiFieldPaddingTop) + var(--uiFieldBorderTop));
        left: calc(0px + var(--uiFieldPaddingLeft) + var(--uiFieldBorderLeft));

        pointer-events: none;
        font-size: 0.9em;

        transition: top var(--uiFieldAnimationDuration)
            cubic-bezier(0.9, -0.15, 0.1, 1.15),
          opacity var(--uiFieldAnimationDuration) ease-out;
        will-change: top, opacity;
      }

      .field__input:not(:placeholder-shown) ~ .field__label-wrap .field__label {
        opacity: 0;
        top: calc(0px + var(--uiFieldPaddingTop) + var(--uiFieldBorderTop));
      }

      .field__input:focus ~ .field__label-wrap .field__label {
        opacity: 1;
        top: calc(
          -1 * calc(var(--uiFieldPaddingTop) + var(--uiFieldBorderTop) + 15px)
        );
      }
      .field_type2 {
        --uiFieldBorderBottom: var(--fieldBorderBottom, 2px);
        --uiFieldPaddingTop: var(--fieldPaddingTop, 5px);
        --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
        --uiFieldPaddingBottom: var(--fieldPaddingBottom, 10px);
        --uiFieldPaddingLeft: var(--fieldPaddingLeft, 15px);
      }

      .field_type2 .field__label-wrap:after {
        content: "";
        width: 0;
        height: var(--uiFieldBorderBottom);
        background-color: var(--fieldBorderColorActive);

        position: absolute;
        bottom: 0;
        left: 0;

        will-change: width;
        transition: width var(--uiFieldAnimationDuration) ease-out;
      }

      .field_type2 .field__input:focus ~ .field__label-wrap:after {
        width: 100%;
      }
    `}</style>
  </div>
)
