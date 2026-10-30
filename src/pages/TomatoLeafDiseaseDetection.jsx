import { useRef, useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  Camera,
  FolderOpen,
  Leaf,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  X,
  LoaderCircle,
  ScanSearch,
  Sprout,
  FileUp
} from "lucide-react";

import "./Disease.css";

const diseases = [
  "Early Blight",
  "Late Blight",
  "Leaf Mold",
  "Yellow Leaf Curl Virus",
  "Healthy Leaf",
];

export default function TomatoLeafDiseaseDetection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [dragging, setDragging] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const selectFile = (selectedFile) => {
    if (!selectedFile) return;

    setError("");

    if (!selectedFile.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5 MB.");
      return;
    }

    if (preview) URL.revokeObjectURL(preview);

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const resetImage = () => {
    if (preview) URL.revokeObjectURL(preview);

    setFile(null);
    setPreview("");
    setError("");
    setAnalyzing(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const analyzeImage = async () => {
    if (!file) {
      setError("Please upload a tomato leaf image first.");
      return;
    }

    setError("");
    setAnalyzing(true);

    // Connect your disease-detection API here.
    // This demo does not perform actual disease prediction.
    setTimeout(() => {
      setAnalyzing(false);
      setError(
        "Image uploaded successfully. Connect your AI prediction API to detect the disease."
      );
    }, 700);
  };

  return (
    <main className="tomato-page">
      <div className="tomato-bg-orb tomato-orb-one" />
      <div className="tomato-bg-orb tomato-orb-two" />

      <section className="tomato-hero">
        <div className="tomato-hero-content">
          <div className="tomato-hero-icon">
            <Leaf size={29} />
          </div>

          <div>
            <span className="tomato-eyebrow">
              SMART AGRICULTURE · AI VISION
            </span>

            <h1>Tomato Leaf Disease Detection</h1>

            <p className="tomato-hero-subtitle">
              AI-powered insights for healthier crops and smarter farming.
            </p>

            <p className="tomato-hero-description">
              Upload a tomato leaf image to get started with disease
              screening and plant health analysis.
            </p>
          </div>
        </div>

        <div className="tomato-hero-decoration" aria-hidden="true">
          <div className="tomato-decoration-circle">
            <Sprout size={76} strokeWidth={1.1} />
          </div>
          <span className="tomato-floating-tag">
            <span className="tomato-status-dot" />
            AI Plant Health
          </span>
        </div>
      </section>

      <section className="tomato-workspace">
        <div className="tomato-upload-panel">
          <div className="tomato-panel-heading">
            <div className="tomato-panel-icon blue">
                {/* <FileUp size={23}  /> */}
              <Upload size={23} />
            </div>

            <div>
              <h2>Upload Tomato Leaf Image</h2>
              <p>JPG, PNG, JPEG · Maximum size 5 MB</p>
            </div>
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="tomato-hidden-input"
            onChange={(event) => selectFile(event.target.files?.[0])}
          />

          <div
            className={`tomato-dropzone ${
              dragging ? "tomato-dropzone-active" : ""
            } ${preview ? "tomato-dropzone-preview" : ""}`}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              selectFile(event.dataTransfer.files?.[0]);
            }}
          >
            {preview ? (
              <div className="tomato-preview-wrap">
                <img
                  src={preview}
                  alt="Selected tomato leaf"
                  className="tomato-preview-image"
                />

                <span className="tomato-image-label">
                  <CheckCircle2 size={15} />
                  Image ready
                </span>

                <button
                  type="button"
                  className="tomato-remove-image"
                  onClick={resetImage}
                  aria-label="Remove selected image"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <div className="tomato-empty-upload">
                <div className="tomato-upload-illustration">
                  <ImageIcon size={57} strokeWidth={1.4} />

                  <span>
                    <Upload size={20} />
                  </span>
                </div>

                <h3>Drag &amp; drop your image here</h3>
                <p>or choose an option below</p>

                <div className="tomato-upload-actions">
                  <button
                    type="button"
                    className="tomato-btn tomato-btn-green"
                    onClick={() => inputRef.current?.click()}
                  >
                    <FolderOpen size={19} />
                    Choose Image
                  </button>

                  <span className="tomato-or">OR</span>

                  <button
                    type="button"
                    className="tomato-btn tomato-btn-blue"
                    onClick={() => {
                      if (inputRef.current) {
                        inputRef.current.setAttribute(
                          "capture",
                          "environment"
                        );
                        inputRef.current.click();
                        inputRef.current.removeAttribute("capture");
                      }
                    }}
                  >
                    <Camera size={19} />
                    Capture Image
                  </button>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="tomato-message" role="status">
              {error}
            </div>
          )}

          <div className="tomato-upload-note">
            <div className="tomato-note-icon">
              <ShieldCheck size={25} />
            </div>

            <div>
              <strong>Simple, secure image upload</strong>
              <p>
                Use a clear photo of a tomato leaf for better analysis.
              </p>
            </div>
          </div>

          <div className="tomato-action-row">
            <button
              type="button"
              className="tomato-btn tomato-btn-analyze"
              onClick={analyzeImage}
              disabled={!file || analyzing}
            >
              {analyzing ? (
                <LoaderCircle className="tomato-spinner" size={19} />
              ) : (
                <ScanSearch size={19} />
              )}

              {analyzing ? "Processing..." : "Analyze Image"}
              {!analyzing && <ArrowRight size={18} />}
            </button>

            <button
              type="button"
              className="tomato-btn tomato-btn-reset"
              onClick={resetImage}
            >
              <RotateCcw size={17} />
              Reset
            </button>
          </div>
        </div>

        <aside className="tomato-info-panel">
          <div className="tomato-panel-heading">
            <div className="tomato-panel-icon green">
              <Lightbulb size={24} />
            </div>

            <div>
              <h2>How It Works</h2>
              <p>Three simple steps</p>
            </div>
          </div>

          <div className="tomato-steps">
            <div className="tomato-step">
              <span className="tomato-step-number">01</span>

              <div>
                <h3>Upload Image</h3>
                <p>Select or drag and drop a tomato leaf photo.</p>
              </div>
            </div>

            <div className="tomato-step">
              <span className="tomato-step-number">02</span>

              <div>
                <h3>AI Analysis</h3>
                <p>
                  The connected AI model examines the leaf image for
                  disease-related patterns.
                </p>
              </div>
            </div>

            <div className="tomato-step">
              <span className="tomato-step-number">03</span>

              <div>
                <h3>View Results</h3>
                <p>
                  Get the predicted class and confidence score from the
                  connected model.
                </p>
              </div>
            </div>
          </div>

          <div className="tomato-disease-section">
            <div className="tomato-subheading">
              <Leaf size={21} />
              <h3>Supported Categories</h3>
            </div>

            <ul className="tomato-disease-list">
              {diseases.map((disease) => (
                <li key={disease}>
                  <CheckCircle2 size={16} />
                  <span>{disease}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tomato-tip-card">
            <div className="tomato-tip-icon">
              <ShieldCheck size={22} />
            </div>

            <p>
              <strong>Better input, better insights.</strong>
              <br />
              Use good lighting and keep the leaf clearly visible.
            </p>
          </div>
        </aside>
      </section>

      <div className="tomato-bottom-note">
        <Leaf size={17} />
        <span>
          Helping growers take an informed first step toward healthier crops.
        </span>
      </div>
    </main>
  );
}