"use client";
import LoginForm from "@/components/entities/LoginForm/LoginForm";
import AgencyLogo from "@/components/UI/AgencyLogo";
import styles from "./page.module.scss";

export default function LoginPage() {
    return (
        <section className={styles.loginPage}>
            <div className={styles.logo}>
                <AgencyLogo />
            </div>
            <div className={styles.formDiv}>
                <LoginForm />
            </div>
        </section>
    );
}
