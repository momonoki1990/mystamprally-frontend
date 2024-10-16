import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
  IonAlert,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/core/components";
import { useQuery } from "@apollo/client";
import { graphql } from "../../src/gql";

const schema = z.object({
  title: z
    .string()
    .min(1, { message: "Required" })
    .max(3, { message: "Must be 3 characters or less" }),
});

type FormValues = z.infer<typeof schema>;

const visitHistoryFragment = graphql(/* GraphQL */ `
  fragment VisitHistoryFragment on VisitHistory {
    id
    title
    latitude
    longitude
    createdAt
    updatedAt
  }
`);

const visitQueryDocument = graphql(/* GraphQL */ `
  query sample {
    visitHistories {
      ...VisitHistoryFragment
    }
  }
`);

const VisitForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert("Hello, " + data.title);
    console.log(data); // APIリクエストなど
  };

  const onDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    reset({
      title: "",
    });
    modal.current?.dismiss();
  };

  const modal = useRef<HTMLIonModalElement>(null);

  const { data } = useQuery(visitQueryDocument);

  console.log({ data });

  return (
    <IonModal
      ref={modal}
      trigger="open-add-visit-modal"
      // onWillDismiss={(ev) => onWillDismiss(ev)}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              id="confirm-visit-form-dismiss"
              // onClick={() => modal.current?.dismiss()}
            >
              Cancel
            </IonButton>
            <IonAlert
              trigger="confirm-visit-form-dismiss"
              header="入力した内容を破棄してよろしいですか？"
              buttons={[
                {
                  text: "キャンセル",
                  role: "cancel",
                },
                {
                  text: "OK",
                  role: "confirm",
                  handler: (ev) => onDismiss(ev),
                },
              ]}
            ></IonAlert>
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} type="submit" form="visitForm">
              保存
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form id="visitForm" onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonInput
              className={`
                ${errors.title?.message ? "ion-invalid" : "ion-valid"} 
                ${touchedFields.title && "ion-touched"}
                `}
              label="Enter title"
              labelPlacement="stacked"
              type="text"
              placeholder="title"
              helperText="Please enter a title"
              errorText={errors.title?.message}
              {...register("title")}
            />
          </IonItem>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default VisitForm;
