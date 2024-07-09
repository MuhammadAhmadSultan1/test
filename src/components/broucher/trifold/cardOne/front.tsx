import { useEffect } from "react";

import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";
import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import broucherFront1 from "../../../../assets/broucherFront1.png";
import broucherFront2 from "../../../../assets/broucherFront2.png";
import broucherBack1 from "../../../../assets/broucherBack1.png";

export default function TrifoldOne(props: TCanvasCardProps) {
  const { text, editable, primary, secondary } = props;

  const {
    primaryFront,
    primaryBack,
    secondaryCircleTopRightFront,
    secondaryCircleRightFront,
    secondaryCircle,
    whiteCircle,
    secondaryRec,
    secondaryCircleLeftBack,
    emailSvg,
    locationSvg,
    phoneSvg,
    websiteSvg,
    bulletPoint,
    bulletPointBack,
  } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
  });

  useEffect(() => {
    if (editable && props.stageRef.current) {
      props.stageRef.current.setAttr("scale", {
        x: 0.5,
        y: 0.5,
      });
    }
  }, [editable]);

  // const testMetaData = {
  //   logo: {
  //     width: 50,
  //     height: 27.4,
  //     x: 391,
  //     y: 41,
  //   },
  //   phone: {
  //     text: "+92 123 456 7890",
  //     x: 360,
  //     y: 442,
  //     width: 100,
  //     height: 14,
  //     fontSize: 12,
  //     fontWeight: 400,
  //     lineHeight: 1,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   email: {
  //     text: "test@gmail.com",
  //     x: 360,
  //     y: 472,
  //     width: 130,
  //     height: 14,
  //     fontSize: 12,
  //     fontWeight: 400,
  //     lineHeight: 1,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   website: {
  //     text: "www.website.com",
  //     x: 360,
  //     y: 502,
  //     width: 130,
  //     height: 14,
  //     fontSize: 12,
  //     fontWeight: 400,
  //     lineHeight: 1,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   address: {
  //     text: "X park view, DHA Phase 8 Lahore Pakistan",
  //     x: 360,
  //     y: 532,
  //     width: 136,
  //     height: 20,
  //     fontSize: 12,
  //     fontWeight: 400,
  //     lineHeight: 1,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   description: {
  //     text: "At Innovative Printing Solutions, we pride ourselves on delivering high-quality printing services that meet the unique needs of our clients. With over 20 years of experience in the industry, our team of skilled professionals uses the latest technology to bring your vision to life. ",
  //     x: 309.5,
  //     y: 177.5,
  //     width: 220,
  //     height: 190,
  //     fontSize: 16,
  //     fontWeight: 400,
  //     lineHeight: 1,
  //     fontStyle: "normal",
  //     textDecoration: "empty string",
  //   },
  //   benefits: [
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 289.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 316.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 343.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 370.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 397.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 424.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 451.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 478.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 505.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "High-Quality Prints",
  //       x: 30.5,
  //       y: 532.5,
  //       width: 226,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //   ],
  //   painPoints: [
  //     {
  //       text: "Long Turnaround Times",
  //       x: 31,
  //       y: 420.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Long Turnaround Times",
  //       x: 31,
  //       y: 447.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Long Turnaround Times",
  //       x: 31,
  //       y: 474.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Long Turnaround Times",
  //       x: 31,
  //       y: 501.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Long Turnaround Times",
  //       x: 31,
  //       y: 528.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Long Turnaround Times",
  //       x: 31,
  //       y: 555.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Limited Eco-Friendly Options",
  //       x: 322,
  //       y: 384.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Limited Eco-Friendly Options",
  //       x: 322,
  //       y: 411.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Limited Eco-Friendly Options",
  //       x: 322,
  //       y: 438.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Limited Eco-Friendly Options",
  //       x: 322,
  //       y: 465.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Limited Eco-Friendly Options",
  //       x: 322,
  //       y: 492.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Limited Eco-Friendly Options",
  //       x: 322,
  //       y: 519.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Limited Eco-Friendly Options",
  //       x: 322,
  //       y: 546.5,
  //       width: 231,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //   ],
  //   featureHeadings: [
  //     {
  //       text: "AI Solutions",
  //       x: 581,
  //       y: 61.5,
  //       width: 220,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Custom Development",
  //       x: 581,
  //       y: 152.5,
  //       width: 220,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "ML Insights",
  //       x: 581,
  //       y: 291.5,
  //       width: 220,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Cloud Services",
  //       x: 581,
  //       y: 414.5,
  //       width: 220,
  //       height: 19,
  //       fontSize: 16,
  //       fontWeight: 700,
  //       lineHeight: 1,
  //       fontStyle: "bold",
  //       textDecoration: "empty string",
  //     },
  //   ],
  //   featureDescriptions: [
  //     {
  //       text: "Our AI solutions streamline operations and enhance decision-making by integrating advanced algorithms and data analytics, ensuring your business remains competitive and future-ready.",
  //       x: 581,
  //       y: 88.5,
  //       width: 250,
  //       height: 48,
  //       fontSize: 14,
  //       fontWeight: 400,
  //       lineHeight: 1,
  //       fontStyle: "normal",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "We tailor software development to your unique needs, ensuring seamless integration with your existing systems and delivering scalable and efficient solutions that drive business growth.",
  //       x: 581,
  //       y: 179.5,
  //       width: 250,
  //       height: 96,
  //       fontSize: 14,
  //       fontWeight: 400,
  //       lineHeight: 1,
  //       fontStyle: "normal",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Leverage our ML insights to transform raw data into actionable strategies, enabling you to predict trends, understand customer behavior, and make data-driven decisions with confidence.",
  //       x: 581,
  //       y: 318.5,
  //       width: 250,
  //       height: 80,
  //       fontSize: 14,
  //       fontWeight: 400,
  //       lineHeight: 1,
  //       fontStyle: "normal",
  //       textDecoration: "empty string",
  //     },
  //     {
  //       text: "Enhance your business agility and reduce overhead with our comprehensive cloud services, providing secure and scalable infrastructure to support your digital transformation journey.",
  //       x: 581,
  //       y: 441.5,
  //       width: 250,
  //       height: 80,
  //       fontSize: 14,
  //       fontWeight: 400,
  //       lineHeight: 1,
  //       fontStyle: "normal",
  //       textDecoration: "empty string",
  //     },
  //   ],
  // };

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={867}
      height={297.5}
      scale={editable ? props.stageRef.current?.scale() : { x: 0.5, y: 0.5 }}
      style={{ backgroundColor: "#FFFFFF" }}
      id="canvas"
    >
      <Konva.Layer x={0} y={0}>
        <CustomImage svgString={primaryFront} x={-12} y={0} />
        <CustomImage url={broucherFront1} x={18} y={-12} />
        <CustomImage svgString={secondaryCircleTopRightFront} x={0} y={0} />
        <CustomImage svgString={secondaryRec} x={297} y={55} />
        <CustomImage svgString={secondaryCircle} x={380} y={19} />
        <CustomImage svgString={whiteCircle} x={384} y={23} />
        <CustomImage svgString={primaryFront} x={560} y={0} />
        <CustomImage url={broucherFront2} x={592} y={63} />
        <CustomImage
          svgString={secondaryCircleRightFront}
          x={770.5}
          y={242.5}
        />

        <CustomImage
          url={text.templateAttributes.logo.url}
          x={text.templateAttributes.logo.x}
          y={text.templateAttributes.logo.y}
          width={text.templateAttributes.logo.width}
          height={text.templateAttributes.logo.height}
        />

        <Konva.Text
          text="Benefits"
          x={17.5}
          y={253.5}
          width={90}
          height={28}
          fontFamily="Roboto"
          fill="#FFFFFF"
          fontSize={24}
          fontStyle="700"
        />
        <Konva.Group x={0} y={0}>
          {text.templateAttributes.benefits.map((benefit, index) => (
            <Konva.Group key={index} x={0} y={0}>
              <CustomImage
                x={benefit.x - 13}
                y={benefit.y + 7}
                svgString={bulletPoint}
              />
              <Konva.Text
                ref={
                  props.editable
                    ? (ref) => (props.textRef.current.benefits[index] = ref)
                    : undefined
                }
                text={benefit.text}
                x={benefit.x}
                y={benefit.y}
                width={benefit.width}
                height={benefit.height}
                align="left"
                fontFamily="Roboto"
                fill="#FFFFFF"
                fontSize={benefit.fontSize}
                fontStyle={benefit.fontStyle}
                lineHeight={benefit.lineHeight}
                textDecoration={benefit.textDecoration}
                onDblClick={() => {
                  if (
                    props.editable &&
                    props.textRef.current &&
                    props.textRef.current.benefits &&
                    editable
                  ) {
                    props.textRef.current.benefits[index]?.hide();
                    props.dblClickHandler(`benefits`, index);
                  }
                }}
              />
            </Konva.Group>
          ))}
        </Konva.Group>

        <Konva.Text
          text="About Us"
          x={371}
          y={141.5}
          width={100}
          height={28}
          fontFamily="Roboto"
          fontSize={24}
          fontStyle="600"
        />

        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.description = ref)
              : undefined
          }
          text={text.templateAttributes.description.text}
          x={text.templateAttributes.description.x}
          y={text.templateAttributes.description.y}
          width={text.templateAttributes.description.width}
          height={text.templateAttributes.description.height}
          align="center"
          fontFamily="Roboto"
          fontSize={text.templateAttributes.description.fontSize}
          fontStyle={text.templateAttributes.description.fontStyle}
          lineHeight={text.templateAttributes.description.lineHeight}
          textDecoration={text.templateAttributes.description.textDecoration}
          onDblClick={() => {
            if (
              props.editable &&
              props.textRef.current &&
              props.textRef.current.description &&
              editable
            ) {
              props.textRef.current.description?.hide();
              props.dblClickHandler(`description`);
            }
          }}
        />

        <Konva.Text
          text="Contact Us"
          x={360}
          y={390}
          width={119}
          height={28}
          fontFamily="Roboto"
          fontSize={24}
          fontStyle="600"
        />

        <Konva.Group x={0} y={0}>
          <CustomImage svgString={phoneSvg} x={339} y={453.14} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.phone = ref)
                : undefined
            }
            text={text.templateAttributes.phone.text}
            x={text.templateAttributes.phone.x}
            y={text.templateAttributes.phone.y}
            width={text.templateAttributes.phone.width}
            height={text.templateAttributes.phone.height}
            align="left"
            fontFamily="Roboto"
            fontSize={text.templateAttributes.phone.fontSize}
            fontStyle={text.templateAttributes.phone.fontStyle}
            lineHeight={text.templateAttributes.phone.lineHeight}
            textDecoration={text.templateAttributes.phone.textDecoration}
            onDblClick={() => {
              if (
                props.editable &&
                props.textRef.current &&
                props.textRef.current.phone &&
                editable
              ) {
                props.textRef.current.phone?.hide();
                props.dblClickHandler(`phone`);
              }
            }}
          />
        </Konva.Group>
        <Konva.Group x={0} y={0}>
          <CustomImage svgString={emailSvg} x={339} y={483.12} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.email = ref)
                : undefined
            }
            text={text.templateAttributes.email.text}
            x={text.templateAttributes.email.x}
            y={text.templateAttributes.email.y}
            width={text.templateAttributes.email.width}
            height={text.templateAttributes.email.height}
            align="left"
            fontFamily="Roboto"
            fontSize={text.templateAttributes.email.fontSize}
            fontStyle={text.templateAttributes.email.fontStyle}
            lineHeight={text.templateAttributes.email.lineHeight}
            textDecoration={text.templateAttributes.email.textDecoration}
            onDblClick={() => {
              if (
                props.editable &&
                props.textRef.current &&
                props.textRef.current.email &&
                editable
              ) {
                props.textRef.current.email?.hide();
                props.dblClickHandler(`email`);
              }
            }}
          />
        </Konva.Group>
        <Konva.Group x={0} y={0}>
          <CustomImage svgString={websiteSvg} x={339} y={512.67} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.website = ref)
                : undefined
            }
            text={text.templateAttributes.website.text}
            x={text.templateAttributes.website.x}
            y={text.templateAttributes.website.y}
            width={text.templateAttributes.website.width}
            height={text.templateAttributes.website.height}
            align="left"
            fontFamily="Roboto"
            fontSize={text.templateAttributes.website.fontSize}
            fontStyle={text.templateAttributes.website.fontStyle}
            lineHeight={text.templateAttributes.website.lineHeight}
            textDecoration={text.templateAttributes.website.textDecoration}
            onDblClick={() => {
              if (
                props.editable &&
                props.textRef.current &&
                props.textRef.current.website &&
                editable
              ) {
                props.textRef.current.website?.hide();
                props.dblClickHandler(`website`);
              }
            }}
          />
        </Konva.Group>
        <Konva.Group x={0} y={0}>
          <CustomImage svgString={locationSvg} x={339} y={549.23} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.address = ref)
                : undefined
            }
            text={text.templateAttributes.address.text}
            x={text.templateAttributes.address.x}
            y={text.templateAttributes.address.y}
            width={text.templateAttributes.address.width}
            height={text.templateAttributes.address.height}
            align="left"
            fontFamily="Roboto"
            fontSize={text.templateAttributes.address.fontSize}
            fontStyle={text.templateAttributes.address.fontStyle}
            lineHeight={text.templateAttributes.address.lineHeight}
            textDecoration={text.templateAttributes.address.textDecoration}
            onDblClick={() => {
              if (
                props.editable &&
                props.textRef.current &&
                props.textRef.current.address &&
                editable
              ) {
                props.textRef.current.address?.hide();
                props.dblClickHandler(`address`);
              }
            }}
          />
        </Konva.Group>
      </Konva.Layer>
      <Konva.Layer x={892} y={0}>
        <CustomImage svgString={primaryBack} x={288} y={0} />
        <CustomImage url={broucherBack1} x={-12} y={-12} />
        <CustomImage svgString={secondaryCircleLeftBack} x={-12} y={120.5} />
        <Konva.Text
          text="Pain Points"
          x={18}
          y={384.5}
          width={124}
          height={28}
          fill="#093D3F"
          fontFamily="Roboto"
          fontSize={24}
          fontStyle="bold"
        />

        <Konva.Group x={0} y={0}>
          {text.templateAttributes.painPoints.map((point, index) => (
            <Konva.Group key={index} x={0} y={0}>
              <CustomImage
                x={point.x - 13}
                y={point.y + 7}
                svgString={index <= 5 ? bulletPointBack : bulletPoint}
              />
              <Konva.Text
                ref={
                  props.editable
                    ? (ref) => (props.textRef.current.painPoints[index] = ref)
                    : undefined
                }
                text={point.text}
                x={point.x}
                y={point.y}
                width={point.width}
                height={point.height}
                align="left"
                fontFamily="Roboto"
                fill={index <= 5 ? "#323232" : "#FFFFFF"}
                fontSize={point.fontSize}
                fontStyle={point.fontStyle}
                lineHeight={point.lineHeight}
                textDecoration={point.textDecoration}
                onDblClick={() => {
                  if (
                    props.editable &&
                    props.textRef.current &&
                    props.textRef.current.painPoints &&
                    editable
                  ) {
                    props.textRef.current.painPoints[index]?.hide();
                    props.dblClickHandler(`painPoints`, index);
                  }
                }}
              />
            </Konva.Group>
          ))}
        </Konva.Group>

        <Konva.Text
          text="Features"
          x={581}
          y={17.5}
          width={95}
          height={28}
          fill="#093D3F"
          fontFamily="Roboto"
          fontSize={24}
          fontStyle="bold"
        />

        <Konva.Group x={0} y={0}>
          {text.templateAttributes.featureHeadings.map(
            (feature, index) =>
              index <= 4 && (
                <Konva.Group key={index} x={0} y={0}>
                  <Konva.Text
                    ref={
                      props.editable
                        ? (ref) =>
                            (props.textRef.current.featureHeadings[index] = ref)
                        : undefined
                    }
                    text={feature.text}
                    x={feature.x}
                    y={feature.y}
                    width={feature.width}
                    height={feature.height}
                    align="left"
                    fontFamily="Roboto"
                    fill={"#323232"}
                    fontSize={feature.fontSize}
                    fontStyle={feature.fontStyle}
                    lineHeight={feature.lineHeight}
                    textDecoration={feature.textDecoration}
                    onDblClick={() => {
                      if (
                        props.editable &&
                        props.textRef.current &&
                        props.textRef.current.featureHeadings &&
                        editable
                      ) {
                        props.textRef.current.featureHeadings[index]?.hide();
                        props.dblClickHandler(`featureHeadings`, index);
                      }
                    }}
                  />
                  <Konva.Text
                    ref={
                      props.editable
                        ? (ref) =>
                            (props.textRef.current.featureDescriptions[index] =
                              ref)
                        : undefined
                    }
                    text={
                      text.templateAttributes.featureDescriptions[index].text
                    }
                    x={text.templateAttributes.featureDescriptions[index].x}
                    y={text.templateAttributes.featureDescriptions[index].y}
                    width={
                      text.templateAttributes.featureDescriptions[index].width
                    }
                    height={
                      text.templateAttributes.featureDescriptions[index].height
                    }
                    align="left"
                    fontFamily="Roboto"
                    fill={"#323232"}
                    fontSize={
                      text.templateAttributes.featureDescriptions[index]
                        .fontSize
                    }
                    fontStyle={
                      text.templateAttributes.featureDescriptions[index]
                        .fontStyle
                    }
                    lineHeight={
                      text.templateAttributes.featureDescriptions[index]
                        .lineHeight
                    }
                    textDecoration={
                      text.templateAttributes.featureDescriptions[index]
                        .textDecoration
                    }
                    onDblClick={() => {
                      if (
                        props.editable &&
                        props.textRef.current &&
                        props.textRef.current.featureDescriptions &&
                        editable
                      ) {
                        props.textRef.current.featureDescriptions[
                          index
                        ]?.hide();
                        props.dblClickHandler(`featureDescriptions`, index);
                      }
                    }}
                  />
                </Konva.Group>
              )
          )}
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
