import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Button from "components/Button";
import Icon from "components/Icon";

const List = ({ className, title, subtitle, text, items, button }) => {
  return (
    <div
      className={classnames({
        TxContent__list: true,
        [className]: Boolean(className),
      })}
    >
      {title && <h2>{title}</h2>}
      {text && <div className="margin-bottom-4">{text}</div>}
      {subtitle && <h3>{subtitle}</h3>}
      {items && (
        <Row gap="6">
          {items.map((item, i) => (
            <Col key={`txLinks-${i}`} size="12" desktop="6">
              <div className="display-flex margin-bottom-4">
                <Icon
                  icon="circle"
                  size="xs"
                  className="margin-right-2 margin-top-1 text-accent-warm"
                />
                <div>
                  <b className="margin-right-2px">{item.title}</b>
                  <span>{item.text}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
      {button.text && button.link && (
        <div className="text-center margin-bottom-4">
          <Button variant="outline" url={button.link}>
            {button.text}
          </Button>
        </div>
      )}
    </div>
  );
};

List.defaultProps = {
  button: {},
  items: [],
};

List.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  text: PropTypes.node,
  button: PropTypes.object,
  items: PropTypes.array,
};

export default List;
