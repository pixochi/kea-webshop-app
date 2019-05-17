import React, { HTMLAttributes } from 'react';
import { BaseFieldProps, Field, WrappedFieldProps } from 'redux-form';
import { FlexDirectionProperty, ContentPosition } from 'csstype';

import { s0, s2, s3, s4, s5, Spacing } from '../styleguide/spacing';

import { Body } from '../styleguide/text';
import { Flex, Base } from '../styleguide/layout';

interface FieldContainerProps {
  direction: FlexDirectionProperty;
  align: ContentPosition;
  justify: ContentPosition;
  marginTop?: Spacing;
  marginVertical?: Spacing;
}

interface FormFieldProps {
  labelText?: string;
  labelImage?: React.ReactNode;
  isEmphasized?: boolean;
  isHorizontal?: boolean;
}

type Props = FormFieldProps & BaseFieldProps<any> & Partial<WrappedFieldProps> &
  Partial<HTMLAttributes<any>> & Partial<HTMLInputElement> & {[attribute: string]: any};

const FormField: React.SFC<Props> = (props) => {
  const {
    labelText,
    labelImage,
    isEmphasized,
    isHorizontal,
    ...rest
  } = props;

  const fieldProps: FieldContainerProps = isHorizontal ? {
    direction: 'row-reverse',
    align: 'center',
    justify: 'flex-end',
    marginTop: s5,
  } : {
    direction: 'column',
    marginVertical: s2,
  } as FieldContainerProps;

  return (
    <Flex {...fieldProps}>
      <Flex as="span" align="center">
        {Boolean(labelText) && (
          <Body
            emphasized={isEmphasized}
            paddingVertical={s3}
            marginLeft={isHorizontal ? s4 : s0}
            marginBottom={s0}
          >
            {labelText}
          </Body>
        )}
        {Boolean(labelImage) && (
          <Base marginLeft={s2}>
            {labelImage}
          </Base>
        )}
      </Flex>
      <Field {...rest}  />
    </Flex>
  );
};

export default FormField;
