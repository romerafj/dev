import User from "../models/user";
import { hashPassword, comparePasswords } from "../utils/auth";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, confirmPassword } = req.body;

        // Validamos campos
        if (!name)
            return res.status(400).send("El nombre del usuario es obligatorio");
        if (!password || password.length < 8) {
            return res
                .status(400)
                .send(
                    "La contraseña es obligatoria y debe tener más de ocho caracteres"
                );
        }
        if (password && confirmPassword && password !== confirmPassword) {
            return res.status(400).send("Las dos contraseñas no coinciden");
        }
        let userExists = await User.findOne({ email }).exec();
        if (userExists)
            return res.status(400).send("Usuario ya registrado con ese email");

        // hash password
        const hashedPassword = await hashPassword(password);
        // register
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        console.log("Usuario guardado");

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error al registrar el usuario");
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email)
            return res.status(400).send("La dirección de correo es obligatoria");
        if (!password || password.length < 8)
            return res
                .status(400)
                .send(
                    "La contraseña es obligatoria y debe tener al menos 8 caracteres"
                );
        let user = await User.findOne({ email }).exec();
        if (!user) return res.status(400).send("Usuario no encontrado");
        const match = await comparePasswords(password, user.password);
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        user.password = undefined;
        res.cookie("token", token, {
            httpOnly: true,
        });
        res.json(user);
    } catch (err) {
        console.log("Error", err);
        return res.status(400).send("Intenta identificarte otra vez");
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.json({ message: "Fin de la sesión" });
    } catch {
        console.log("Error", err);
    }
};

export const checkAuth = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.usuario = await User.findById(decoded.id).select(
                "-password -confirmado -token -createdAt -updatedAt -__v"
            );

            return next();
        } catch (error) {
            return res.status(404).json({ msg: "Hubo un error" });
        }
    }

    if (!token) {
        const error = new Error("Token no válido");
        return res.status(401).json({ msg: error.message });
    }

    next();
};

export const profile = async (req, res) => {
    const { usuario } = req;
    res.json(usuario);
};
