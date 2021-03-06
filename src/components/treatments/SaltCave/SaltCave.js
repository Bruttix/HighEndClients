import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faSquare,
  faClock,
  faTag,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import ACTION_CALM_TOGGLE_RESET from "../../../actions/Treatments/Calm/ACTION_CALM_TOGGLE_RESET";
import ACTION_CLARIFY_TOGGLE_RESET from "../../../actions/Treatments/Clarify/ACTION_CLARIFY_TOGGLE_RESET";
import ACTION_BACIAL_TOGGLE_RESET from "../../../actions/Treatments/Bacial/ACTION_BACIAL_TOGGLE_RESET";
import ACTION_GLOW_TOGGLE_RESET from "../../../actions/Treatments/Glow/ACTION_GLOW_TOGGLE_RESET";
import ACTION_GLOWTWO_TOGGLE_RESET from "../../../actions/Treatments/GlowTwo/ACTION_GLOWTWO_TOGGLE_RESET";
import ACTION_REJUVENATE_TOGGLE_RESET from "../../../actions/Treatments/Rejuvenate/ACTION_REJUVENATE_TOGGLE_RESET";
import ACTION_QUENCH_TOGGLE_RESET from "../../../actions/Treatments/Quench/ACTION_QUENCH_TOGGLE_RESET";
import ACTION_CHEMICAL_PEEL_TOGGLE_RESET from "../../../actions/Treatments/ChemicalPeel/ACTION_CHEMICAL_PEEL_TOGGLE_RESET";
import ACTION_DERMAPLANING_TOGGLE_RESET from "../../../actions/Treatments/Dermaplaning/ACTION_DERMAPLANING_TOGGLE_RESET";
import ACTION_CBD_TOGGLE_RESET from "../../../actions/Treatments/CBD/ACTION_CBD_TOGGLE_RESET";
import ACTION_MICRONEEDLE_TOGGLE_RESET from "../../../actions/Treatments/Microneedle/ACTION_MICRONEEDLE_TOGGLE_RESET";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import { toast } from "react-toastify";
import SaltCaveNotification from "./SaltCaveNotification";
import SaltCaveRemovedNotification from "./SaltCaveRemovedNotification";
import FacialInCartErrorNotification from "../FacialInCartErrorNotification";
import "./SaltCave.css";
import ACTION_SALT_CAVE_TOGGLE from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE";
import ACTION_SALT_CAVE_TOGGLE_RESET from "../../../actions/Treatments/SaltCave/ACTION_SALT_CAVE_TOGGLE_RESET";
import ACTION_SALT_CAVE_NOT_IN_CART from "../../../actions/InCart/Treatments/SaltCave/ACTION_SALT_CAVE_NOT_IN_CART";
import ACTION_SALT_CAVE_IN_CART from "../../../actions/InCart/Treatments/SaltCave/ACTION_SALT_CAVE_IN_CART";
import { FormGroup, Input } from "reactstrap";
import ACTION_SELECTED_SALT_CAVE_DURATION from "../../../actions/Treatments/SaltCave/SaltCaveDuration/ACTION_SELECTED_SALT_CAVE_DURATION";
import ACTION_BEARD_NOT_IN_CART from "../../../actions/InCart/AddOns/Beard/ACTION_BEARD_NOT_IN_CART";
import ACTION_DERMAROLLING_NOT_IN_CART from "../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_NOT_IN_CART";
import ACTION_EXTRACTION_NOT_IN_CART from "../../../actions/InCart/AddOns/ExtraExtractions/ACTION_EXTRACTION_NOT_IN_CART";
import ACTION_GUASHA_NOT_IN_CART from "../../../actions/InCart/AddOns/GuaSha/ACTION_GUASHA_NOT_IN_CART";
import ACTION_HYDROJELLY_NOT_IN_CART from "../../../actions/InCart/AddOns/HydroJellyMask/ACTION_HYDROJELLY_NOT_IN_CART";
import ACTION_LED_NOT_IN_CART from "../../../actions/InCart/AddOns/LEDTherapy/ACTION_LED_NOT_IN_CART";
import ACTION_MICROCURRENT_NOT_IN_CART from "../../../actions/InCart/AddOns/Microcurrent/ACTION_MICROCURRENT_NOT_IN_CART";
import ACTION_MICRODERMABRASION_NOT_IN_CART from "../../../actions/InCart/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_NOT_IN_CART";
import ACTION_NANONEEDLING_NOT_IN_CART from "../../../actions/InCart/AddOns/NanoNeedling/ACTION_NANONEEDLING_NOT_IN_CART";
import ACTION_JET_HYDRO_PEEL_TOGGLE_RESET from "../../../actions/Treatments/JetHydroPeel/ACTION_JET_HYDRO_PEEL_TOGGLE_RESET";

const SaltCave = (props) => {
  // "Learn More" states
  const calmToggle = useSelector((state) => state.calmToggle.toggle);
  const clarifyToggle = useSelector((state) => state.clarifyToggle.toggle);
  const bacialToggle = useSelector((state) => state.bacialToggle.toggle);
  const glowToggle = useSelector((state) => state.glowToggle.toggle);
  const glowTwoToggle = useSelector((state) => state.glowTwoToggle.toggle);
  const rejuvenateToggle = useSelector(
    (state) => state.rejuvenateToggle.toggle
  );
  const quenchToggle = useSelector((state) => state.quenchToggle.toggle);
  const chemicalpeelToggle = useSelector(
    (state) => state.chemicalpeelToggle.toggle
  );
  const dermaplaningToggle = useSelector(
    (state) => state.dermaplaningToggle.toggle
  );
  const cbdToggle = useSelector((state) => state.cbdToggle.toggle);
  const microneedleToggle = useSelector(
    (state) => state.microneedleToggle.toggle
  );
  const saltCaveToggle = useSelector((state) => state.saltCaveToggle.toggle);
  const jetHydroPeelToggle = useSelector(
    (state) => state.jetHydroPeelToggle.toggle
  );

  // In Cart states
  const calmInCart = useSelector((state) => state.calmInCart.in_cart);
  const clarifyInCart = useSelector((state) => state.clarifyInCart.in_cart);
  const bacialInCart = useSelector((state) => state.bacialInCart.in_cart);
  const glowInCart = useSelector((state) => state.glowInCart.in_cart);
  const glowTwoInCart = useSelector((state) => state.glowTwoInCart.in_cart);
  const cbdInCart = useSelector((state) => state.cbdInCart.in_cart);
  const chemicalPeelInCart = useSelector(
    (state) => state.chemicalPeelInCart.in_cart
  );
  const dermaplaningInCart = useSelector(
    (state) => state.dermaplaningInCart.in_cart
  );
  const microneedleInCart = useSelector(
    (state) => state.microneedleInCart.in_cart
  );
  const quenchInCart = useSelector((state) => state.quenchInCart.in_cart);
  const quickieInCart = useSelector((state) => state.quickieInCart.in_cart);
  const rejuvenateInCart = useSelector(
    (state) => state.rejuvenateInCart.in_cart
  );
  const unsureInCart = useSelector((state) => state.unsureInCart.in_cart);
  const saltCaveInCart = useSelector((state) => state.saltCaveInCart.in_cart);
  const selectedSaltCaveDuration = useSelector(
    (state) => state.selectedSaltCaveDuration.duration
  );

  // Cart States
  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  // Add-Ons
  const beardInCart = useSelector((state) => state.beardInCart.in_cart);
  const dermarollingInCart = useSelector(
    (state) => state.dermarollingInCart.in_cart
  );
  const extraExtractionsInCart = useSelector(
    (state) => state.extraExtractionsInCart.in_cart
  );
  const guashaInCart = useSelector((state) => state.guashaInCart.in_cart);
  const hydroJellyInCart = useSelector(
    (state) => state.hydroJellyInCart.in_cart
  );
  const ledInCart = useSelector((state) => state.ledInCart.in_cart);
  const microcurrentInCart = useSelector(
    (state) => state.microcurrentInCart.in_cart
  );
  const microdermabrasionInCart = useSelector(
    (state) => state.microdermabrasionInCart.in_cart
  );
  const nanoneedlingInCart = useSelector(
    (state) => state.nanoneedlingInCart.in_cart
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!saltCaveToggle) {
      dispatch(ACTION_SALT_CAVE_TOGGLE());
      if (calmToggle) {
        dispatch(ACTION_CALM_TOGGLE_RESET());
      }
      if (clarifyToggle) {
        dispatch(ACTION_CLARIFY_TOGGLE_RESET());
      }
      if (bacialToggle) {
        dispatch(ACTION_BACIAL_TOGGLE_RESET());
      }
      if (glowToggle) {
        dispatch(ACTION_GLOW_TOGGLE_RESET());
      }
      if (glowTwoToggle) {
        dispatch(ACTION_GLOWTWO_TOGGLE_RESET());
      }
      if (rejuvenateToggle) {
        dispatch(ACTION_REJUVENATE_TOGGLE_RESET());
      }
      if (quenchToggle) {
        dispatch(ACTION_QUENCH_TOGGLE_RESET());
      }
      if (chemicalpeelToggle) {
        dispatch(ACTION_CHEMICAL_PEEL_TOGGLE_RESET());
      }
      if (dermaplaningToggle) {
        dispatch(ACTION_DERMAPLANING_TOGGLE_RESET());
      }
      if (cbdToggle) {
        dispatch(ACTION_CBD_TOGGLE_RESET());
      }
      if (microneedleToggle) {
        dispatch(ACTION_MICRONEEDLE_TOGGLE_RESET());
      }
      if (jetHydroPeelToggle) {
        dispatch(ACTION_JET_HYDRO_PEEL_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_SALT_CAVE_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (saltCaveToggle) {
      return (
        <>
          <div className="card_description_paragraph_toggle">
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <FormGroup className="salt_cave_time_formgroup">
                <div className="salt_cave_time_formgroup_dropdown_input_field">
                  <FontAwesomeIcon
                    className="salt_cave_time_formgroup_dropdown_icon"
                    icon={faChevronCircleDown}
                  />
                  <Input
                    className="salt_cave_time_formgroup_input"
                    type="select"
                    name="select"
                    id="salt_cave_time_preference"
                    value={selectedSaltCaveDuration.toString() + " minutes"}
                    disabled={
                      calmInCart |
                        cbdInCart |
                        chemicalPeelInCart |
                        clarifyInCart |
                        dermaplaningInCart |
                        bacialInCart |
                        microneedleInCart |
                        rejuvenateInCart |
                        quenchInCart |
                        glowInCart ||
                        glowTwoInCart ||
                      unsureInCart ||
                      quickieInCart ||
                      saltCaveInCart
                    }
                    onChange={(e) => {
                      dispatch(
                        ACTION_SELECTED_SALT_CAVE_DURATION(
                          Number(e.target.value.slice(0, 2))
                        )
                      );

                      if (saltCaveInCart) {
                        props.resetAllCartStates();
                        dispatch(
                          ACTION_SELECTED_SALT_CAVE_DURATION(
                            Number(e.target.value.slice(0, 2))
                          )
                        );
                      }
                    }}
                  >
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                  </Input>
                </div>
              </FormGroup>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value salt_cave_ios_price">
                <p>${selectedSaltCaveDuration}</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
          Our holistic head therapy techniques promote better
          breathing, tension reduction, headache reduction, and overall wellness.
        </p>
      );
    }
  };

  const SuitcaseBounce = Keyframes.Spring({
    suitcaseBounce: [
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 100 },
      },
      {
        marginTop: "-9px",
        color: "rgb(155, 98, 107)",
        config: { duration: 300 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-6",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-4px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
    ],
  });

  const checkMark = () => {
    return (
      <Spring from={{ x: 100 }} to={{ x: 0 }} config={{ duration: 2000 }}>
        {(styles) => (
          <svg
            width={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "2rem"
                  : props.initialScreenSize >= 1400
                  ? "1rem"
                  : props.initialScreenSize >= 1200
                  ? "1rem"
                  : "100%"
                : props.currentScreenSize >= 1800
                ? "2rem"
                : props.currentScreenSize >= 1400
                ? "1rem"
                : props.currentScreenSize >= 1200
                ? "1rem"
                : "100%"
            }
            height={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 2200
                  ? "2rem"
                  : props.initialScreenSize >= 1800
                  ? "1.3rem"
                  : props.initialScreenSize >= 1600
                  ? "1.3rem"
                  : props.initialScreenSize >= 1200
                  ? "1.1rem"
                  : props.initialScreenSize >= 360
                  ? "2rem"
                  : "1rem"
                : props.currentScreenSize >= 2200
                ? "2rem"
                : props.currentScreenSize >= 1800
                ? "1.3rem"
                : props.currentScreenSize >= 1600
                ? "1.3rem"
                : props.currentScreenSize >= 1200
                ? "1.1rem"
                : props.currentScreenSize >= 360
                ? "2rem"
                : "1rem"
            }
            style={{
              marginTop:
                props.currentScreenSize === ""
                  ? props.initialScreenSize >= 2200
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1800
                    ? "0"
                    : props.initialScreenSize >= 1600
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1200
                    ? "-0.1rem"
                    : props.initialScreenSize >= 360
                    ? "-0.5rem"
                    : "0rem"
                  : props.currentScreenSize >= 2200
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1800
                  ? "0"
                  : props.currentScreenSize >= 1600
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1200
                  ? "-0.1rem"
                  : props.currentScreenSize >= 360
                  ? "-0.5rem"
                  : "0rem",
              display: saltCaveInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (saltCaveInCart ? `${styles.x}` : 0) : 0
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        )}
      </Spring>
    );
  };

  const inCartToastId = "facial_already_in_cart";

  const addToCart = () => {
    if (
      calmInCart |
        cbdInCart |
        chemicalPeelInCart |
        clarifyInCart |
        dermaplaningInCart |
        bacialInCart |
        microneedleInCart |
        rejuvenateInCart |
        quenchInCart |
        glowInCart ||
        glowTwoInCart ||
      unsureInCart ||
      quickieInCart
    ) {
      if (!toast.isActive(inCartToastId)) {
        toast.dismiss();
        toast(
          <FacialInCartErrorNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_error_container",
            toastId: inCartToastId,
          }
        );
      }
    } else {
      if (saltCaveInCart) {
        toast.dismiss();
        dispatch(ACTION_SALT_CAVE_NOT_IN_CART());
        dispatch(ACTION_DECREMENT_COUNTER());
        dispatch(ACTION_SELECTED_DAY_RESET());
        dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());

        props.resetAllCartStates();
        toast(
          <SaltCaveRemovedNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_removed_container",
          }
        );
      } else {
        toast.dismiss();
        dispatch(ACTION_SALT_CAVE_IN_CART(selectedSaltCaveDuration));
        dispatch(ACTION_INCREMENT_COUNTER());
        dispatch(ACTION_NAVBAR_IS_VISIBLE());
        changeCartClicked(true);
        setTimeout(() => changeCartClicked(false), 200);
        toast(
          <SaltCaveNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />
        );
        if (beardInCart) {
          dispatch(ACTION_BEARD_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (dermarollingInCart) {
          dispatch(ACTION_DERMAROLLING_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (extraExtractionsInCart) {
          dispatch(ACTION_EXTRACTION_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (guashaInCart) {
          dispatch(ACTION_GUASHA_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (hydroJellyInCart) {
          dispatch(ACTION_HYDROJELLY_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (ledInCart) {
          dispatch(ACTION_LED_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (microcurrentInCart) {
          dispatch(ACTION_MICROCURRENT_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (microdermabrasionInCart) {
          dispatch(ACTION_MICRODERMABRASION_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
        if (nanoneedlingInCart) {
          dispatch(ACTION_NANONEEDLING_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
        }
      }
    }
  };

  const bookButtonBounce = () => {
    return (
      <SuitcaseBounce state="suitcaseBounce">
        {(styles) => (
          <span
            className="fa-layers fa-fw"
            style={
              saltCaveToggle
                ? clarifyInCart |
                    bacialInCart |
                    cbdInCart |
                    chemicalPeelInCart |
                    calmInCart |
                    dermaplaningInCart |
                    glowInCart |
                    glowTwoInCart |
                    microneedleInCart |
                    quenchInCart |
                    quickieInCart |
                    rejuvenateInCart ||
                  unsureInCart ||
                  saltCaveInCart
                  ? { position: "relative" }
                  : styles
                : { position: "relative" }
            }
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon
              color={
                saltCaveToggle
                  ? saltCaveInCart
                    ? "rgba(119, 221, 119, 0.6)"
                    : calmInCart |
                        cbdInCart |
                        chemicalPeelInCart |
                        clarifyInCart |
                        dermaplaningInCart |
                        bacialInCart |
                        microneedleInCart |
                        rejuvenateInCart |
                        quenchInCart |
                        glowInCart ||
                        glowTwoInCart ||
                      unsureInCart ||
                      quickieInCart
                    ? "rgba(211, 211, 211, 0.8"
                    : "rgba(0, 129, 177, 0.4)"
                  : saltCaveInCart
                  ? "rgba(119, 221, 119, 0.6)"
                  : calmInCart |
                      cbdInCart |
                      chemicalPeelInCart |
                      clarifyInCart |
                      dermaplaningInCart |
                      bacialInCart |
                      microneedleInCart |
                      rejuvenateInCart |
                      quenchInCart |
                      glowInCart ||
                      glowTwoInCart ||
                    unsureInCart ||
                    quickieInCart
                  ? "rgba(211, 211, 211, 0.8"
                  : "rgba(0, 129, 177, 0.3)"
              }
              transform={
                !props.currentScreenSize
                  ? props.initialScreenSize >= 360
                    ? "grow-20"
                    : "grow-10"
                  : props.currentScreenSize >= 360
                  ? "grow-20"
                  : "grow-10"
              }
              icon={faSquare}
            />
            {checkMark()}
            <FontAwesomeIcon
              className="small_screen_card_description_suitcase"
              style={{ display: saltCaveInCart ? "none" : "block" }}
              color={
                calmInCart |
                  cbdInCart |
                  chemicalPeelInCart |
                  clarifyInCart |
                  dermaplaningInCart |
                  bacialInCart |
                  microneedleInCart |
                  rejuvenateInCart |
                  quenchInCart |
                  glowInCart ||
                  glowTwoInCart ||
                unsureInCart ||
                quickieInCart
                  ? "rgb(151, 151, 151)"
                  : "rgb(0, 129, 177)"
              }
              icon={faSuitcase}
            />
          </span>
        )}
      </SuitcaseBounce>
    );
  };

  const bigScreenBottomWrapperRender = () => {
    return (
      <div className="big_screen_entire_bottom_wrapper">
        <div className="big_screen_price_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faTag}
          />
          <p className="big_screen_price">${selectedSaltCaveDuration}</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <FormGroup className="salt_cave_time_formgroup">
            <div className="salt_cave_time_formgroup_dropdown_input_field">
              <FontAwesomeIcon
                className="salt_cave_time_formgroup_dropdown_icon"
                icon={faChevronCircleDown}
              />
              <Input
                className="salt_cave_time_formgroup_input"
                type="select"
                name="select"
                id="salt_cave_time_preference"
                value={selectedSaltCaveDuration.toString() + " minutes"}
                disabled={
                  calmInCart |
                    cbdInCart |
                    chemicalPeelInCart |
                    clarifyInCart |
                    dermaplaningInCart |
                    bacialInCart |
                    microneedleInCart |
                    rejuvenateInCart |
                    quenchInCart |
                    glowInCart ||
                    glowTwoInCart ||
                  unsureInCart ||
                  quickieInCart ||
                  saltCaveInCart
                }
                onChange={(e) => {
                  dispatch(
                    ACTION_SELECTED_SALT_CAVE_DURATION(
                      Number(e.target.value.slice(0, 2))
                    )
                  );

                  if (saltCaveInCart) {
                    props.resetAllCartStates();
                    dispatch(
                      ACTION_SELECTED_SALT_CAVE_DURATION(
                        Number(e.target.value.slice(0, 2))
                      )
                    );
                  }
                }}
              >
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>60 minutes</option>
              </Input>
            </div>
          </FormGroup>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: saltCaveToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {saltCaveToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {bookButtonBounce()}
      </div>
    );
  };

  const dynamicScreenSizeBottomCardRender = () => {
    if (props.currentScreenSize === "") {
      if (props.initialScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    } else {
      if (props.currentScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    }
  };

  const bigScreenAddToCartButton = () => {
    if (saltCaveInCart) {
      return (
        <>
          {checkMark()}
          <p className="big_screen_in_cart">IN CART</p>
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon
            className="big_screen_card_description_suitcase"
            icon={faSuitcase}
          />
          <p>BOOK NOW</p>
        </>
      );
    }
  };

  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="card_container"
          ref={ref}
          style={{ display: props.saltCaveChemPeelRendered }}
        >
          {inView ? (
            <Spring
              from={{ position: "relative", opacity: 0 }}
              to={{ position: "relative", opacity: 1 }}
              config={{ duration: 1000 }}
            >
              {(styleprops) => (
                <section className="card" style={styleprops}>
                  <div
                    className="card_image"
                    style={{
                      backgroundColor: saltCaveToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: saltCaveToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{
                        x: 200,
                        fill1: "white",
                        fill2: "white",
                        fill3: "white",
                      }}
                      to={{
                        x: 0,
                        fill1: "#fbbbbc",
                        fill2: "#ec989a",
                        fill3: "#d29270",
                      }}
                      config={{ duration: 2000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? saltCaveInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quenchInCart |
                                      glowInCart ||
                                      glowTwoInCart ||
                                    unsureInCart ||
                                    quickieInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : saltCaveInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart ||
                                    glowTwoInCart ||
                                  unsureInCart ||
                                  quickieInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? saltCaveInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quenchInCart |
                                      glowInCart ||
                                      glowTwoInCart ||
                                    unsureInCart ||
                                    quickieInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : saltCaveInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart ||
                                    glowTwoInCart ||
                                  unsureInCart ||
                                  quickieInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? saltCaveInCart
                                  ? "rgb(0, 0, 0)"
                                  : calmInCart |
                                      cbdInCart |
                                      chemicalPeelInCart |
                                      clarifyInCart |
                                      dermaplaningInCart |
                                      bacialInCart |
                                      microneedleInCart |
                                      rejuvenateInCart |
                                      quenchInCart |
                                      glowInCart ||
                                      glowTwoInCart ||
                                    unsureInCart ||
                                    quickieInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : saltCaveInCart
                                ? "rgb(0, 0, 0)"
                                : calmInCart |
                                    cbdInCart |
                                    chemicalPeelInCart |
                                    clarifyInCart |
                                    dermaplaningInCart |
                                    bacialInCart |
                                    microneedleInCart |
                                    rejuvenateInCart |
                                    quenchInCart |
                                    glowInCart ||
                                    glowTwoInCart ||
                                  unsureInCart ||
                                  quickieInCart
                                ? "rgb(141, 141, 141)"
                                : "rgb(0, 129, 177)",
                              cursor:
                                calmInCart |
                                  cbdInCart |
                                  chemicalPeelInCart |
                                  clarifyInCart |
                                  dermaplaningInCart |
                                  bacialInCart |
                                  microneedleInCart |
                                  rejuvenateInCart |
                                  quenchInCart |
                                  glowInCart ||
                                  glowTwoInCart ||
                                unsureInCart ||
                                quickieInCart
                                  ? "auto"
                                  : "pointer",
                              transition: "all 0.5s ease",
                            }}
                            onMouseEnter={() =>
                              changeBookNowButtonHovered(true)
                            }
                            onMouseLeave={() =>
                              changeBookNowButtonHovered(false)
                            }
                          >
                            {bigScreenAddToCartButton()}
                          </div>
                          <svg
                            className="card_svg"
                            width="100%"
                            height="15rem"
                            viewBox="0 0 50.006 50.006"
                          >
                            <circle
                              cx="25"
                              cy="25"
                              r={
                                props.currentScreenSize === ""
                                  ? props.initialScreenSize >= 1200
                                    ? "20"
                                    : "23"
                                  : props.currentScreenSize >= 1200
                                  ? "20"
                                  : "23"
                              }
                              stroke={
                                saltCaveToggle
                                  ? "rgb(25, 154, 202)"
                                  : "rgba(191, 191, 191)"
                              }
                              strokeWidth="0.5"
                              fill="white"
                            />
                            <g transform="translate(13 12)" fill="none">
                              <animated.path
                                fill={`${styles.fill1}`}
                                stroke="#000"
                                strokeWidth="0.3"
                                strokeDasharray="250"
                                strokeDashoffset={`${styles.x}`}
                                className="salt_cave_icon_path"
                                d="M24.343 47.757c-2.57-.105-5.222-.656-7.006-1.455-.576-.258-.853-.436-1.386-.893-.727-.622-.787-.786-.793-2.155-.004-.928.053-1.323.225-1.558.124-.17.082-.24-.31-.515a63.077 63.077 0 00-2.317-1.493c-.993-.612-2.139-1.399-2.497-1.717-.443-.392-.598-.652-.594-.995.003-.234.091-.818.193-1.267.025-.112.075-.35.11-.53.036-.18.097-.423.136-.54.061-.185.09-.218.217-.247.094-.022.253-.015.442.021.908.172 2.565.337 3.375.337.472 0 .777-.05.693-.116a6.176 6.176 0 00-.565-.209c-.56-.19-1.396-.526-2.457-.989a16.163 16.163 0 00-1.783-.686c-.397-.128-.55-.204-.83-.407-.388-.282-.446-.355-.426-.541.013-.116.032-.132.168-.144.095-.008.287.035.502.111.628.225.879.294 1.937.533.576.13 1.63.377 2.343.548 1.391.333 2.054.468 2.924.596.761.11.815.095 1.16-.338.465-.585.55-.72 1.202-1.896.455-.82.783-1.348 1.139-1.835.548-.749 1.025-1.588 1.15-2.023.12-.415.177-.454.773-.534.668-.089 1.879-.354 2.35-.515.513-.175.895-.385.93-.51.043-.152-.01-.235-.13-.203a8.396 8.396 0 01-.511.088c-.226.034-.768.127-1.206.207l-1.115.202c-.7.124-.923.266-1.683 1.074-.2.212-.579.599-.841.859a180.596 180.596 0 00-2.298 2.297c-.15.157-.502.516-.783.797-.37.37-.554.593-.67.81-.231.43-.234.43-1.157.148-.416-.127-1.145-.368-1.62-.535s-1.131-.387-1.456-.488a7.123 7.123 0 01-.692-.24c-.056-.032-.16-.057-.233-.057s-.184-.037-.248-.082a.548.548 0 00-.315-.081.59.59 0 01-.357-.104.5.5 0 00-.293-.096c-.187.013-.44-.042-.531-.114a.662.662 0 00-.264-.083c-.106-.013-.203-.051-.225-.088-.071-.124-.097-.433-.053-.637.028-.128.03-.288.003-.428-.069-.37-.15-1.335-.156-1.836-.002-.258-.023-.93-.045-1.492l-.04-1.023.489-.445c.269-.245.613-.592.765-.772.551-.652.657-.747.909-.814.412-.11 2.03-.16 3.41-.106 1.758.07 1.908.02 1.155-.375a6.267 6.267 0 00-1.365-.548 6.484 6.484 0 01-.55-.174c-.086-.055-.593-.202-.978-.285-.721-.155-1.59-.094-2.322.161-.136.048-.559.227-.94.399-.38.172-.706.299-.724.283-.042-.038-.091-.749-.129-1.844-.04-1.216-.046-1.298-.135-2.182-.045-.438-.07-.947-.058-1.131l.022-.336.242-.256c.312-.329.968-.966 1.5-1.458.23-.213.492-.47.582-.571a26.407 26.407 0 011.234-1.265c.323-.288 1.414-1.164 1.616-1.297.282-.187.467-.38.532-.558.032-.09.09-.168.127-.174.038-.006.335.144.66.333 2.006 1.167 3.412 1.832 4.8 2.27.48.15.456.095.424.971-.03.82.074 2.401.185 2.83.135.521.659 1.12 1.342 1.537.325.197.414.233.414.165 0-.067-.372-.481-.769-.856-.178-.168-.336-.346-.35-.394-.037-.126.05-.608.285-1.561.28-1.139.325-1.432.34-2.164.015-.734-.015-.824-.363-1.107-.117-.094-.399-.329-.627-.521-.454-.384-.624-.487-1.905-1.164a181.24 181.24 0 00-2.502-1.31c-.3-.154-.684-.367-.851-.474-.168-.106-.42-.251-.558-.321s-.251-.149-.25-.175c0-.026.04-.286.087-.577.29-1.765.305-1.812.655-2.086.323-.253 1.776-.972 2.873-1.422 2.556-1.047 6.791-2.056 8.712-2.075.568-.006.744.044 1.312.373.995.575 2.454 1.33 4.056 2.099 1.816.87 4.656 2.218 5.744 2.724 1.187.552 1.503.76 1.735 1.141.3.494.332.75.479 3.732.054 1.104.112 1.871.21 2.794.037.348.099.962.136 1.366.052.557.09.774.159.897.05.09.338.412.642.714s.75.771.99 1.04c1.514 1.689 1.652 2.077 1.298 3.671l-.159.714a11.01 11.01 0 01-.177.693c-.046.146-.14.458-.208.694a4.961 4.961 0 01-.193.56c-.069.137-.201.177-.27.082-.02-.028-.047-.455-.06-.948-.027-.99-.045-1.062-.33-1.265-.188-.133-1.473-.648-1.857-.743-.263-.065-.542-.072-2.864-.072-2.43 0-2.582.004-2.763.077-.227.092-.259.21-.067.245.139.025 2.262.27 3.41.393.406.043.825.1.933.124a19.25 19.25 0 001.778.304c.603.072.76.126.76.261 0 .138-.296.83-.638 1.491-.105.202-.34.661-.524 1.02-.622 1.219-1.363 2.61-1.444 2.712-.15.189-.269.639-.248.933.038.551.431 1.843.682 2.244.108.17.129.24.097.313-.022.052-.297.29-.61.529-.793.605-2.326 1.903-2.833 2.398-.44.43-.596.615-1.397 1.662-.716.935-.956 1.361-1.227 2.179-.157.475-.67 1.73-.976 2.386-.284.612-.219.6.518-.096.447-.423.583-.58.704-.816.27-.526.679-1.266.838-1.515.086-.134.225-.364.31-.51.084-.145.199-.338.255-.428l.366-.6c.145-.241.32-.477.386-.523l.464-.316c.821-.553 1.555-1.156 2.953-2.425.364-.331.7-.602.744-.602.044 0 .1.041.122.092.063.141.17.75.276 1.58.11.851.092 1.044-.135 1.488-.115.227-.251.413-1.046 1.429a24.113 24.113 0 01-1.85 2.12c-.178.18-.346.366-.374.414-.096.164-.113.511-.035.708.162.406.22.78.189 1.203-.063.845-.234 1.306-.626 1.677-.324.308-.62.483-1.476.868-1.119.504-1.82.734-2.996.984-1.807.384-3.273.589-4.512.63-1.404.047-1.926.05-2.721.018zm1.24-3.891c.298-.061.345-.085.5-.254.093-.102.274-.255.402-.34.128-.085.266-.218.307-.296.16-.302.053-1.116-.334-2.536-.184-.676-.348-1.066-.73-1.742-.124-.218-.225-.44-.225-.493 0-.15.357-.98.697-1.621.171-.323.427-.93.608-1.446.087-.247.195-.531.24-.632.164-.367.32-.874.32-1.04 0-.186-.157-.369-.28-.326-.037.012-.228.22-.426.46-.614.747-1.913 2.296-2.23 2.66-.39.445-.67.83-.916 1.261-.17.298-.197.379-.197.6 0 .14.02.298.044.35.024.05.098.221.165.378.18.423.61 1.18.877 1.546.577 1.187-.189 1.749-1.492 2.186a.508.508 0 00-.236.072c-.186.122-.308.173-.41.173-.147 0-1.145.584-1.151.673-.002.023.089.046.202.052.112.006.583.075 1.046.153 1.521.255 2.514.305 3.22.162zM32.01 27.04c.237-.069.53-.144.653-.168.35-.067.808-.252 1.345-.541.271-.147.506-.267.522-.267.015 0 .146-.073.29-.161.407-.249.446-.256 1.04-.186.597.07 1.753.082 1.884.019.11-.053.115-.15.009-.176a5.022 5.022 0 00-.467-.046c-.845-.057-1.808-.193-2.34-.33-.48-.125-.908-.037-1.536.317-.4.224-.941.573-1.238.795-.202.152-.426.205-.57.135a5.255 5.255 0 01-.517-.396c-.898-.749-2.214-1.727-3.563-2.646-.38-.259-.497-.284-.455-.097.039.173.244.428.558.692.147.123.514.435.815.693.301.258.923.78 1.381 1.16.459.38.989.834 1.179 1.01.256.236.375.318.463.318.065 0 .311-.056.547-.125zm-14.965-.035c.364-.109.699-.27.972-.465.13-.094.398-.271.593-.395.68-.428 1.196-.84 1.54-1.227.32-.359.2-.403-.502-.185a7.899 7.899 0 00-2.212 1.058 8.588 8.588 0 01-.46.302c-.184.098-.228.088-2.117-.46-1.198-.349-1.687-.434-1.845-.323-.087.061-.086.065.038.153.205.147 3.502 1.617 3.627 1.618.062 0 .227-.034.366-.075zm18.525-6.256c.282-.107.47-.261.817-.672.353-.417.717-.904.718-.96 0-.117-1.016.798-1.182 1.063-.161.258-.25.283-.736.208-.304-.046-.468-.053-.62-.024-.203.04-.222.034-.947-.292-.89-.399-1.331-.556-1.398-.496-.095.086.71.633 1.198.815.063.023.298.135.523.248l.41.205.523-.015c.341-.01.582-.038.694-.08zm-6.562-1.09c.036-.06.036-.19.001-.459a11.928 11.928 0 01-.123-2.139c.017-1.185-.06-1.066 1.008-1.536 1.466-.644 2.639-1.092 3.576-1.367.327-.096.509-.2.693-.396.152-.161.183-.239.373-.91.086-.304.248-.865.361-1.247.263-.887.37-1.358.436-1.915.03-.246.08-.54.113-.652.067-.233.04-.305-.146-.391-.07-.033-.285-.138-.476-.233-.354-.177-.526-.214-.562-.123-.03.076-.104.604-.206 1.479-.139 1.188-.215 1.708-.366 2.497-.172.903-.213 1.05-.315 1.132-.044.037-.324.11-.62.163-.969.175-2.164.526-3.41 1.003-.771.296-.934.406-1.067.722-.14.333-.176 1.28-.076 1.95.04.268.085.596.1.73.016.135.077.337.137.45.185.348.212.437.247.805.025.255.058.38.117.439.103.102.143.102.205-.002zm-2.25-9.421c.437-.133.988-.53 1.392-1.004.42-.494.474-.578.405-.64-.096-.086-.997.24-1.666.602-.319.172-.435.179-.783.048a17.174 17.174 0 00-.715-.24c-.68-.214-.893-.294-1.529-.579a6.202 6.202 0 00-1.61-.493 11.274 11.274 0 01-.558-.117c-.303-.075-.617-.037-.641.077-.01.043.018.1.06.128.043.028.122.105.176.17.155.188.604.522 1.075.802.854.506 2.097.963 3.277 1.206.69.142.774.145 1.117.04z"
                              />
                              <animated.path
                                fill={`${styles.fill2}`}
                                stroke="#000"
                                strokeWidth="0.2"
                                strokeDasharray="250"
                                strokeDashoffset={`${styles.x}`}
                                className="salt_cave_icon_path"
                                d="M24.525 47.694c-1.542-.082-2.553-.2-3.685-.427-.721-.145-1.484-.334-1.91-.472a69.647 69.647 0 00-.638-.204c-.438-.137-1.217-.479-1.546-.678-.359-.217-1.192-.945-1.3-1.135-.136-.237-.171-.454-.202-1.237-.038-.964.05-1.629.238-1.823.08-.083.194-.053.49.13.11.067.227.122.262.122s.165.058.288.129a46.837 46.837 0 00.735.415c.241.137.289.136.575-.01.246-.125.592-.221 1.416-.391a18.4 18.4 0 002.563-.762c.234-.089.438-.15.452-.137 3.88-1.33 2.716 1.104-.463 1.669.016.04-.02.082-.105.121-.261.121-.696.442-.696.514 0 .062.057.078.364.102.2.015.652.081 1.003.147 1.294.24 2.776.304 3.34.145.206-.057.249-.057.456 0 .15.042.58.078 1.252.107.856.036 1.198.032 2.092-.026 1.845-.117 1.896-.127 3.844-.747a87.134 87.134 0 011.684-.52c.537-.153.756-.25 1.02-.448.211-.158.322-.145.322.036 0 .05.03.125.067.168a.34.34 0 01.068.184c0 .058.034.191.074.297.063.165.066.258.022.69-.065.628-.117.842-.286 1.164-.17.327-.52.643-.98.886-.48.253-1.436.67-2 .871-.488.175-1.507.454-1.656.454-.048 0-.409.065-.802.145-2.065.421-4.496.62-6.358.521zm6.645-4.62c-.07-.069-.074-.11-.032-.355.035-.197.034-.432-.001-.809-.065-.693-.023-2.807.07-3.508.197-1.478.263-1.768.459-2.03.556-.742 2.646-2.707 3.615-3.399.269-.191.483-.379.53-.462.074-.135.072-.153-.041-.51-.133-.415-.237-.913-.198-.948.014-.012-.178-1.763-.07-1.685.936-.743 4.248-1.515 2.723.766a2.811 2.811 0 00-.087.607c-.017.355-.01.417.053.432.052.012.098.128.159.4.094.423.337 1.087.509 1.39.06.107.11.21.11.23 0 .019-.25.226-.557.46-1.342 1.025-2.938 2.433-3.443 3.036-.668.797-1.387 1.775-1.618 2.202-.134.247-.4.871-.593 1.387-.49 1.31-1.091 2.669-1.233 2.784-.139.112-.25.116-.355.013zm-6.645-1.755c-.306-.045-.633-.366-.973-.382-.273-.013-.296-.022-.364-.14-.098-.169-.446-.5-.906-.862-.44-.347-.582-.523-.673-.836-.085-.292-.023-.797.15-1.214.139-.337.648-.962 1.422-1.747.122-.123.382-.397.578-.607.381-.41.543-.579 1.417-1.476.55-.566.91-.887 1.34-1.195.173-.124.243-.15.336-.13.11.025.115.038.087.198a1.087 1.087 0 01-.089.276c-.081.147-1.751 2.16-2.466 2.975-.415.473-.753.94-.972 1.347-.238.442-.248.693-.045 1.189.192.472.674 1.334.971 1.739.25.34.37.653.338.887l-.15-.022zm-7.21-4.164c-3.606-.572-5.793-1.088-7.007-1.655-.199-.093-.253-.14-.264-.228-.018-.14.16-.733.233-.774.083-.048.297-.038.645.03 1.19.228 3.48.377 3.89.252.227-.07.216-.191-.023-.266a26.665 26.665 0 01-2.092-.793c-1.739-.734-2.103-.878-2.626-1.043-.45-.141-.585-.205-.87-.412-.332-.24-.393-.32-.359-.461.025-.103.183-.09.567.045.654.23 1.026.332 1.855.512.463.1 1.026.232 1.25.292.226.06.482.123.57.141.087.018.476.107.864.2 1.773.421 3.165.653 3.438.573.373-.11.926-.88 1.838-2.557.315-.579.648-1.117.921-1.489.709-.963.997-1.456 1.218-2.078.077-.216.165-.412.195-.434.03-.022.22-.062.42-.089 1.214-.16 2.497-.495 3.137-.82.247-.124.363-.146.41-.077.042.06-1.128 1.083-1.903 1.665-.714.536-.775.607-.93 1.087a8.48 8.48 0 01-.351.816c-.142.292-.35.731-.462.977s-.235.5-.273.566a2.118 2.118 0 00-.135.316c-.06.182-.153.305-.153.203l-.126.22-.253.569-.02.18-.102.28a3.639 3.639 0 01-.183.421 3.923 3.923 0 00-.182.408c-.41 1.063-.612 1.626-.768 2.136-.206.674-.292.843-.535 1.053-.406.35-.793.4-1.835.235zm12.055-4.362c0-.346.127-.867.336-1.379.185-.452.266-.546.457-.53.361.033.295.564-.184 1.48-.321.615-.395.715-.525.715-.074 0-.084-.035-.084-.286zm-1.724-1.82c-.346-.061-.629-.167-.726-.273-.166-.179-.147-.55.035-.697.153-.124.567-.13.94-.013.3.095.9.399 1.236.627.364.247.06.426-.713.419a5.73 5.73 0 01-.772-.063zm10.688-1.602c-1.089-.928-2-.461-2.832-.003-.052 0-.044-.41.012-.649.128-.532 1.737-2.59 2.248-2.874.226-.126.25-.19.12-.307-.068-.06-.184-.082-.557-.105a14.713 14.713 0 01-2.343-.327 1.81 1.81 0 00-.912 0c-.252.066-1.118.546-1.646.91-.497.343-.583.386-.714.357-.063-.014-.293-.175-.51-.357-.874-.729-2.402-1.863-3.635-2.698-.283-.191-.396-.298-.473-.444-.087-.165-.093-.202-.04-.26.084-.09.353-.06.705.076l1.021.399c.413.162.874.335 1.024.386.432.147 1.092.442 1.683.752.3.158.585.287.633.287.047 0 .15-.043.227-.095.078-.053.325-.192.55-.31.226-.12.53-.297.676-.395.33-.222.402-.239.79-.184.17.024.657.082 1.082.128s.958.113 1.183.147.46.06.523.059c.235-.007 1.267.13 1.66.221.43.1 1.364.248 1.837.292.153.015.302.052.331.083.087.094-.18.738-.757 1.827-.119.224-.293.564-.388.755-.094.191-.288.568-.432.837-.143.27-.392.746-.554 1.06s-.31.586-.33.604c-.019.018-.1-.06-.182-.172zm-26.274-.897a5.605 5.605 0 01-1.775-.784l-.426-.289c-.234-.157-.362-.145-.576.053-.236.218-.608.463-.648.427-.018-.016-.032-.19-.032-.386 0-.328.01-.368.128-.508.303-.355 1.213-.677 1.641-.581.124.028.66.401.982.683.695.61 1.002.842 1.146.866.083.013.274-.002.425-.034s.48-.06.736-.061c.432-.001.465.004.493.085.05.138-.06.193-.63.32-.297.066-.583.154-.65.202-.148.104-.374.106-.814.007zm5.482-8.376c-.205-.092-.273-.286-.274-.784 0-.247-.042-.687-.092-.979s-.113-.732-.139-.979c-.072-.68-.065-.672-.95-1.074a53.294 53.294 0 01-1.537-.734c-1.371-.687-2.224-1.082-2.442-1.131-.14-.032-.201.021-.935.82-.288.313-.54.576-.562.584a.898.898 0 00-.159.14 8.12 8.12 0 01-.189.19.743.743 0 00-.12.166c-.103.2-1.17 1.23-1.64 1.583-.349.263-.393.237-.437-.259a6.547 6.547 0 01-.017-.761l.019-.354.427-.441c.234-.243.703-.699 1.04-1.014.338-.314.82-.791 1.07-1.06.25-.268.586-.613.747-.766.309-.294 1.64-1.376 2.031-1.651.206-.145.383-.373.383-.492 0-.11.123-.062.688.266.79.457 1.247.712 1.723.963.651.342 2.035.938 2.707 1.166.35.118.663.238.696.267.046.04.05.182.02.68-.03.484-.021.856.04 1.622.045.547.105 1.097.134 1.224.066.286.267.647.53.954.28.326 1.075.888 1.342.948a.265.265 0 01.16.115c.102.2-.119.38-.602.493-.15.035-.785.11-1.41.167-.626.057-1.3.121-1.497.143-.47.052-.617.05-.755-.012zm11.464-.174c0-.035.033-.12.072-.189.067-.114.066-.174-.002-.701-.097-.751-.133-1.613-.082-1.929a1.696 1.696 0 00-.003-.514c-.053-.318-.026-.43.14-.58.24-.22 2.527-1.175 3.865-1.613.925-.304.952-.316 1.177-.536.225-.22.248-.27.479-1.074.587-2.04.677-2.392.744-2.891.04-.294.103-.657.142-.808.09-.348.065-.39-.356-.596a42.473 42.473 0 00-2.173-.986c-.763-.302-1.091-.452-2.297-1.055a45.973 45.973 0 01-2.661-1.42c-.238-.134-.77-.413-1.183-.62a17.996 17.996 0 01-1.109-.598c-.389-.242-.56-.277-.7-.142-.103.1-.426.205-.628.205-.083 0-.163.018-.179.04-.015.023-.083.041-.15.041a.735.735 0 00-.26.065c-.074.036-.35.12-.613.187-.707.18-4.095 1.106-5.21 1.422-.3.085-.76.213-1.023.284-.797.214-1.005.272-1.47.405-.404.116-.623.133-.623.048 0-.044 1.075-.611 1.57-.83.225-.1.527-.237.671-.306.815-.39 2.579-1 3.946-1.362.6-.16.772-.202 1.706-.421 1.858-.437 3.657-.648 4.22-.496.116.031.513.227.884.435 1.38.775 2.53 1.366 4.086 2.1.275.129.736.349 1.023.488.288.139.656.314.82.389.162.074.49.23.727.347s.668.32.955.456c.288.135.677.318.865.408.187.09.71.333 1.16.542 1.264.585 1.475.735 1.725 1.226.242.474.247.52.436 4.198.024.482.045.909.045.948 0 .172-.114.038-.348-.408-.578-1.102-1.214-2.212-1.267-2.212-.031 0-.08.05-.11.113a1.047 1.047 0 01-.164.23.51.51 0 00-.113.15c0 .036-.464.72-.916 1.352a9.9 9.9 0 00-.493.758c-.35.63-.783.963-1.46 1.123-.136.032-.79.21-1.452.394-.663.185-1.318.36-1.456.39s-.485.126-.773.214c-.446.137-.546.185-.682.323-.088.089-.195.242-.237.34-.41.948-.535 1.25-.767 1.847-.147.378-.3.732-.338.785-.081.11-.16.127-.16.034zm-3.123-6.503a2.462 2.462 0 01-.41-.072 2.08 2.08 0 00-.3-.07c-.388-.058-.758-.285-1.343-.825-.326-.301-.554-.543-.545-.58.012-.055.082-.062.466-.05.457.016.9.088 1.525.248.881.226 1.561.37 1.637.35.046-.014.166-.12.267-.237.246-.285.572-.565 1.133-.974.636-.463.652-.473 1.193-.776.805-.449 1.138-.572 1.138-.42 0 .033-.23.295-.512.581-.281.286-.689.704-.905.928-1.06 1.1-2.372 1.96-2.947 1.932a10.418 10.418 0 01-.397-.035zm6.14-3.55c-.42-.184-.651-.47-.651-.808 0-.088.029-.181.064-.207.108-.081.358-.095.53-.03.182.07.517.376.598.547.03.061.078.14.108.173s.068.119.085.19c.025.105.012.14-.073.193-.153.096-.344.079-.66-.059z"
                              />
                              <animated.path
                                fill={`${styles.fill3}`}
                                className="salt_cave_icon_path"
                                d="M30.113 47.358c-.824-.031-.99.572-3.032.362-.991-.102-2.642.209-4.041-.064-2.644-.515-6.852-1.264-7.723-3.122-.171-.365.018-2.866.018-2.961 0-.096.994.461 1.152.58a.78.78 0 00.158.103c.012 0 .202.1.421.224.22.123.443.224.497.224s.23.038.39.083l.612.169c.175.048.462.13.637.184.175.054.431.123.569.154.538.122 1.09.263 1.169.3.045.02.246.05.446.066s.65.08 1 .144c1.304.239 2.668.3 3.286.15.206-.051.261-.05.432.002.33.103 2.043.188 2.743.136.325-.024.981-.07 1.458-.103.974-.068 1.26-.123 2.318-.452.4-.125 1.178-.364 1.728-.532 1.265-.386 1.407-.439 1.678-.632.122-.087.24-.158.263-.158.068 0 .1.124.044.174-.097.087-.056.267.097.423.147.151.147.152.143.583-.013 1.068-.256 1.624-.91 2.074-.324.224-1.616.817-2.36 1.084-.571.204-1.565.423-1.565.423-1.383.358-.969.38-1.627.382zm6.288-4.209c-39.541-12.076-19.77-6.038 0 0z"
                              />
                            </g>
                          </svg>
                        </>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: saltCaveToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: saltCaveToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.2)",
                      boxShadow: saltCaveToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <div className="salt_cave_card_new_wrapper">
                        <h2 style={{ fontWeight: 400 }}>Head Massage</h2>
                        <h2
                          margintop="25"
                          className="salt_cave_card_new"
                          style={{ marginRight: "-1rem",
                            fontWeight: 500,
                            color: saltCaveToggle
                              ? "rgba(0, 54, 102, 0.7)"
                              : "rgba(25, 79, 127, 0.6)",
                            transition: "ease all 0.5s",
                          }}
                        >
                          NEW!
                        </h2>
                      </div>
                      <p
                        className="card_description_subheader"
                        style={{ opacity: 0.6 }}
                      >
                        Neural therapy 
                      </p>
                      {cardDescriptionHandler()}
                      {dynamicScreenSizeBottomCardRender()}
                    </div>
                  </div>
                </section>
              )}
            </Spring>
          ) : null}
        </div>
      )}
    </InView>
  );
};

export default SaltCave;
